package main

import (
	"context"
	"fmt"
	"log"
	"os"
	"os/signal"
	"path/filepath"

	"github.com/canonical/go-dqlite@latest/app"
	"github.com/spf13/cobra"
	"golang.org/x/sys/unix"
)

func main() {
	var db string
	var join *[]string
	var dir string

	cmd := &cobra.Command{
		Use:   "go-dqlite-demo",
		Short: "Demo application using Dqlite",

		RunE: func(cmd *cobra.Command, args []string) error {
			dir := filepath.Join(dir, db)
			if err := os.MkdirAll(dir, 0755); err != nil {
				return fmt.Errorf("can't create %s: %v", dir, err)
			}

			// Set own address and specify all existing nodes in the cluster.
			options := []app.Option{app.WithAddress(db), app.WithCluster(*join)}

			// Set up Dqlite application
			app, err := app.New(dir, options...)
			if err != nil {
				return err
			}
			log.Println("App created")

			// Create a database 'my-database' or just open it if
			// it already exists.
			db, err := app.Open(context.Background(), "my-database")
			if err != nil {
				log.Fatal(err)
			}
			log.Println("Database created")

			// wait until we received a termination signal
			ch := make(chan os.Signal, 32)
			signal.Notify(ch, unix.SIGPWR)
			signal.Notify(ch, unix.SIGINT)
			signal.Notify(ch, unix.SIGQUIT)
			signal.Notify(ch, unix.SIGTERM)

			<-ch

			db.Close()
			// Transfer all responsibilities (leader/voting rights) to other node
			app.Handover(context.Background())
			app.Close()

			return nil
		},
	}

	flags := cmd.Flags()
	flags.StringVarP(&db, "db", "d", "", "address used for internal database replication")
	join = flags.StringSliceP("join", "j", nil, "database addresses of existing nodes")
	flags.StringVarP(&dir, "dir", "D", "/tmp/dqlite-demo", "data directory")
	cmd.MarkFlagRequired("db")

	if err := cmd.Execute(); err != nil {
		os.Exit(1)
	}
}
