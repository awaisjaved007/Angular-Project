import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter, Injectable} from "@angular/core";


export class ShoppingListService {

  ingredientChanged = new EventEmitter<Ingredient[]>()
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 6)
  ];

  getIngredients()
  {
    return this.ingredients.slice()
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient)
    this.ingredientChanged.emit(this.ingredients.slice())
  }

  addIngredients(ingridents:Ingredient[]){
    this.ingredients.push(...ingridents)
    this.ingredientChanged.emit(this.ingredients.slice())
  }
}
