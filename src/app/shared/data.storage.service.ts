import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipes.model";
import {AuthService} from "../auth/auth.service";

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService, private authService:AuthService) {
  }

  storeRecipes() {
    const token = this.authService.getToken()
    return this.http.put('https://ng-app-recipe.firebaseio.com/recipes.json?auth='+token, this.recipeService.recipes)
  }

  getRecipes() {
    const token = this.authService.getToken()
    return this.http.get('https://ng-app-recipe.firebaseio.com/recipes.json?auth='+token)
      .subscribe(
        (response: Response) => {
          const resp: Recipe[] = response.json()
          this.recipeService.recipes=resp
          this.recipeService.recipeChanged.next(this.recipeService.recipes.slice())
        }
      )
  }

}
