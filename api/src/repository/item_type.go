package repository

import (
	"github.com/GitHub0rganization/linqs/model"
	"github.com/jmoiron/sqlx"
)

func AllItemTypes(db *sqlx.DB) ([]model.ItemType, error) {
	itemTypes := make([]model.ItemType, 0)
	if err := db.Select(&itemTypes, `SELECT id, name FROM item_type`); err != nil {
		return nil, err
	}
	return itemTypes, nil
}
