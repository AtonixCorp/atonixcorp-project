package main

import (
	"database/sql"
	"fmt"
	"log"
	"os"
	"os/signal"

	_ "github.com/lib/pq"
)

func main() {
	// PostgreSQL connection parameters
	host := "localhost"
	port := 5432
	user := "postgres"
	password := "rootbase"
	dbname := "postgres"

	// Connect to PostgreSQL
	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname)
	db, err := sql.Open("postgres", psqlInfo)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	// Create a new database
	_, err = db.Exec("CREATE DATABASE quetzal_db")
	if err != nil {
		log.Printf("Database creation error: %v", err)
	} else {
		log.Println("Database created successfully!")
	}

	// Connect to the newly created database
	psqlInfoNewDB := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, "quetzal_db")
	newDb, err := sql.Open("postgres", psqlInfoNewDB)
	if err != nil {
		log.Fatal(err)
	}
	defer newDb.Close()

	// Create a table in the new database
	_, err = newDb.Exec("CREATE TABLE product_table (id SERIAL PRIMARY KEY, name VARCHAR(50))")
	if err != nil {
		log.Printf("Table creation error: %v", err)
	} else {
		log.Println("Table created successfully!")
	}

	// Wait for termination signal
	ch := make(chan os.Signal, 1)
	signal.Notify(ch, os.Interrupt)
	<-ch

	log.Println("Shutting down...")
}
