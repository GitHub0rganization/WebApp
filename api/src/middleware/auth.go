package middleware

import (
	"errors"
	"log"
	"net/http"

	"firebase.google.com/go/auth"
	"github.com/GitHub0rganization/linqs/httputil"
	"github.com/GitHub0rganization/linqs/model"
	"github.com/GitHub0rganization/linqs/repository"
	"github.com/jmoiron/sqlx"
)

const (
	bearer = "Bearer"
)

type Auth struct {
	client *auth.Client
	db     *sqlx.DB
}

func NewAuth(client *auth.Client, db *sqlx.DB) *Auth {
	return &Auth{
		client: client,
		db:     db,
	}
}

func (auth *Auth) Handler(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		idToken, err := getTokenFromHeader(r)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}
		token, err := auth.client.VerifyIDToken(r.Context(), idToken)
		if err != nil {
			log.Print(err.Error())
			http.Error(w, "Failed to verify token", http.StatusForbidden)
			return
		}
		userRecord, err := auth.client.GetUser(r.Context(), token.UID)

		if err != nil {
			log.Print(err.Error())
			http.Error(w, "Failed to get userRecord", http.StatusInternalServerError)
			return
		}

		firebaseUser := toFirebaseUser(userRecord)
		_, syncErr := repository.SyncUser(auth.db, &firebaseUser)
		if syncErr != nil {
			log.Print(syncErr.Error())
			http.Error(w, "Failed to sync user", http.StatusInternalServerError)
			return
		}

		user, err := repository.GetUser(auth.db, firebaseUser.FirebaseUID)
		if err != nil {
			log.Print(err.Error())
			http.Error(w, "Failed to get user", http.StatusInternalServerError)
			return
		}

		ctx := httputil.SetUserToContext(r.Context(), user)
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}

func getTokenFromHeader(req *http.Request) (string, error) {
	header := req.Header.Get("Authorization")
	if header == "" {
		return "", errors.New("authorization header not found")
	}

	l := len(bearer)
	if len(header) > l+1 && header[:l] == bearer {
		return header[l+1:], nil
	}

	return "", errors.New("authorization header format must be 'Bearer {token}'")
}

func toFirebaseUser(u *auth.UserRecord) model.FirebaseUser {
	return model.FirebaseUser{
		FirebaseUID: u.UID,
		Email:       u.Email,
		PhotoURL:    u.PhotoURL,
		DisplayName: u.DisplayName,
	}
}
