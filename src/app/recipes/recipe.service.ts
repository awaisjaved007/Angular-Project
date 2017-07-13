import {Recipe} from "./recipes.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] =
    [new Recipe('A test recipe', 'This is a test recipe',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLCrg0wbGhPIuq-_k9cWZZpZ_er8F1PuifDR57DEmFl4sy98s1LA',
      [new Ingredient('Meat', 1), new Ingredient('cheese', 4)]
    ),
      new Recipe('Burger', 'Cheese Burger',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLCrg0wbGhPIuq-_k9cWZZpZ_er8F1PuifDR57DEmFl4sy98s1LA',
        [new Ingredient('Beef', 1), new Ingredient('cheese', 4)]
      )];

  constructor(private shopList: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice()
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shopList.addIngredients(ingredients)
  }

  getRecipe(index: number) {
    return this.recipes[index]
  }

}
