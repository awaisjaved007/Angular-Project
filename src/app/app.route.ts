import {Routes} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";
import {RecipeDetailsComponent} from "./recipes/recipe-details/recipe-details.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipeStartComponent} from "./recipes/recipe-start/recipe-start.component";
import {RecipeEditComponent} from "./recipes/recipe-edit/recipe-edit.component";

export const appRoute: Routes = [
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
  {path: 'shopping-list', component: ShoppingListComponent}

];
