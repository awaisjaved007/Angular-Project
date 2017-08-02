
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RecipesRoutingModule} from "./recipes-routing.module";
import {RecipesComponent} from "./recipes.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeItemComponent} from "./recipe-list/recipe-item/recipe-item.component";
import {RecipeDetailsComponent} from "./recipe-details/recipe-details.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    declarations:[
      RecipesComponent,
      RecipeEditComponent,
      RecipeItemComponent,
      RecipeDetailsComponent,
      RecipeListComponent,
      RecipeStartComponent
    ],
    imports:[
      CommonModule,
      ReactiveFormsModule,
      RecipesRoutingModule,
      SharedModule
    ]
  })

export class RecipesModule{


}
