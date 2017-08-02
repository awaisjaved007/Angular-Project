import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {appRoute} from "./app.route";
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {ShoppingListService} from "./shopping-list/shopping-list.service";

import {MyNewRecipieComponent} from "./my-new-recipie/my-new-recipie.component";
import {RecipeService} from "app/recipes/recipe.service";
import {DataStorageService} from "./shared/data.storage.service";
import {HttpModule} from "@angular/http";
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import {AuthService} from "./auth/auth.service";
import {RecipesModule} from "./recipes/recipes.module";
import {SharedModule} from "./shared/shared.module";
import {ShoppingListModule} from "./shopping-list/shopping-list.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MyNewRecipieComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoute),
    RecipesModule,
    SharedModule,
    ShoppingListModule
  ],
  providers: [ShoppingListService,RecipeService,DataStorageService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
