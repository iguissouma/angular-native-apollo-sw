// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";

//"process" doesn't exist as part of NativeScript.
//You can pollyfill it by adding to your app.js (or main.ts) `global.process =  {env: {}};`
//and that will make process and its env work globally in the app as a empty variable.
global.process =  {env: {}};

import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ApolloModule } from "angular2-apollo";
import { client } from "./client";

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        // Define the default ApolloClient
        ApolloModule.withClient(client),
    ],
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);