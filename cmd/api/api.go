package api

import (
	"database/sql"
	"net/http"
	"log"
	
	"github.com/go-chi/chi/v5"
)

type APIserver struct {
	addr string
	db *sql.DB
}

func CreateAPIServer(addr string, db *sql.DB) *APIserver {
	return &APIserver {
		addr: addr,
		db: db,
	}
}

func (serv *APIserver) Run() error {
	router := chi.NewRouter()
	router.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("welcome"))
	})
	log.Println("Listening on: ", serv.addr)	
	return http.ListenAndServe(serv.addr, router)
}
