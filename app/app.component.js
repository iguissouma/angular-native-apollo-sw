"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var angular2_apollo_1 = require("angular2-apollo");
var client_1 = require("./client");
var graphql_tag_1 = require("graphql-tag");
var AppComponent = (function () {
    // Inject Angular2Apollo service
    function AppComponent() {
        //Angular2Apollo service is null when using inject, init manually
        this.apollo = new angular2_apollo_1.Angular2Apollo(client_1.client);
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Query allFilms data with observable variables
        this.apollo.watchQuery({
            query: (_a = ["\n                query getAllFilms{\n                  allFilms{\n                    films{\n                      title\n                      releaseDate\n                    }\n                  }\n                }\n            "], _a.raw = ["\n                query getAllFilms{\n                  allFilms{\n                    films{\n                      title\n                      releaseDate\n                    }\n                  }\n                }\n            "], graphql_tag_1.default(_a))
        })
            .subscribe(function (_a) {
            var data = _a.data;
            //console.dir(data.allFilms.films);
            _this.films = data.allFilms.films;
            console.dir(_this.films);
        });
        this.title = 'SW Films';
        var _a;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map