import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";


export class ShoppingListService {

  ingredientChanged = new Subject<Ingredient[]>()
  itemEdited = new Subject<number>()

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
    this.ingredientChanged.next(this.ingredients.slice())
  }

  addIngredients(ingridents:Ingredient[]){
    this.ingredients.push(...ingridents)
    this.ingredientChanged.next(this.ingredients.slice())
  }

  getIngreditent(index:number){
    return this.ingredients[index]
  }

  updateIngredient(index:number,ingredient:Ingredient){
    this.ingredients[index]=ingredient
    this.ingredientChanged.next(this.ingredients.slice())
  }
  deleteIngredient(index:number){
    this.ingredients.splice(index,1)
    this.ingredientChanged.next(this.ingredients.slice())
  }
}
