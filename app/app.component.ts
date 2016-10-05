import {Component, OnInit} from "@angular/core";
import {Angular2Apollo} from "angular2-apollo";
import {client} from "./client";
import gql from "graphql-tag";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {
    // Observable with GraphQL result
    public films: any;
    // Observable variable of the graphql query
    private apollo: Angular2Apollo;
    private title: string;

    // Inject Angular2Apollo service
    constructor() {
        //Angular2Apollo service is null when using inject, init manually
        this.apollo = new Angular2Apollo(client);
    }

    public ngOnInit() {
        // Query allFilms data with observable variables
        this.apollo.watchQuery({
            query: gql`
                query getAllFilms{
                  allFilms{
                    films{
                      title
                      releaseDate
                    }
                  }
                }
            `
        })
        // Return only users, not the whole ApolloQueryResult
        .subscribe(({data}) => {
            //console.dir(data.allFilms.films);
            this.films = data.allFilms.films;
            console.dir(this.films);
        });
        this.title = 'SW Films'
    }
}