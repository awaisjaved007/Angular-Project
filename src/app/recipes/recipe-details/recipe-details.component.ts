import {Component, Injectable, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipes.model";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})


export class RecipeDetailsComponent implements OnInit {


  recipe: Recipe;
  id: number

  constructor(private route: ActivatedRoute, private recipeService: RecipeService,
  private router:Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id']
        this.recipe = this.recipeService.getRecipe(this.id)
      }
    );
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }

  onEdit()
  {
    this.router.navigate(['edit-recipe'],{relativeTo:this.route})

  }
}
