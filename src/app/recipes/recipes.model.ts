import {Ingredient} from "../shared/ingredient.model";
export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[]

  public constructor(name: string, desc: string, path: string, ingredients:Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = path;
    this.ingredients=ingredients
  }
}
