import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from '../recipes.model';
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: []
})

export class RecipeListComponent implements OnInit,OnDestroy {

  recipes: Recipe[] = []
  subscription= new Subscription()
  constructor(private recipeService: RecipeService, private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes()
    this.subscription=this.recipeService.recipeChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes
      }
    )
  }

  addNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }
  ngOnDestroy()
  {
    this.subscription.unsubscribe()
  }

}
