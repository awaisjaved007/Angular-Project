

import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./recipes.component";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeDetailsComponent} from "./recipe-details/recipe-details.component";

const recipeRoutes:Routes=[
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {
    path: 'recipes', component: RecipesComponent,
    children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailsComponent},
      {path: ':id/edit-recipe', component: RecipeEditComponent}

    ]
  },
];


@NgModule({

  imports:[ RouterModule.forChild(recipeRoutes)],
  exports: [RouterModule]
})

export class RecipesRoutingModule{

}
