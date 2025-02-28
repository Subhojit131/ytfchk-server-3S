package main

import (
	"log"
	"github.com/SITCSE-MERNG-SSSSSBR/ytfchk-server/cmd/api"
)

func main() {
	server := api.CreateAPIServer(":1237", nil)
	if err := server.Run(); err != nil {
		log.Fatal(err)
	}
}
