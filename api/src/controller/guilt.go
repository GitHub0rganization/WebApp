package controller

import (
	"net/http"

	"github.com/GitHub0rganization/WebApp/model"
	"github.com/GitHub0rganization/WebApp/repository"
	"github.com/jmoiron/sqlx"
)

type GuiltController struct {
	db *sqlx.DB
}

func NewGuiltController(db *sqlx.DB) *GuiltController {
	return &GuiltController{db: db}
}

func (guiltController *GuiltController) All(w http.ResponseWriter, r *http.Request) (int, interface{}, error) {
	guilts, err := repository.AllGuilt(guiltController.db)
	if err != nil {
		return http.StatusInternalServerError, nil, err
	}

	guiltJSON := make(map[string][]model.Guilt)
	guiltJSON["guilts"] = guilts

	return http.StatusOK, guiltJSON, nil
}
