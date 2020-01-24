package controller

import (
	"net/http"

	"github.com/GitHub0rganization/linqs/model"
	"github.com/GitHub0rganization/linqs/repository"
	"github.com/jmoiron/sqlx"
)

type ItemTypeController struct {
	db *sqlx.DB
}

func NewItemTypeController(db *sqlx.DB) *ItemTypeController {
	return &ItemTypeController{db: db}
}

func (itemTypeController *ItemTypeController) All(w http.ResponseWriter, r *http.Request) (int, interface{}, error) {
	itemTypes, err := repository.AllItemTypes(itemTypeController.db)
	if err != nil {
		return http.StatusInternalServerError, nil, err
	}

	itemTypesJson := struct {
		ItemTypes []model.ItemType `json:"item_type"`
	}{
		ItemTypes: itemTypes,
	}
	return http.StatusOK, itemTypesJson, nil
}
