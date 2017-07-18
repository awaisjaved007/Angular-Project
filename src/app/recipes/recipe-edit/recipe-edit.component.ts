import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Recipe} from "../recipes.model";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  editMode = false
  recipeId: number
  recipeForm: FormGroup

  constructor(private  router:Router, private route: ActivatedRoute, private recipeService: RecipeService) {
  }

  ngOnInit() {

    this.route.params.subscribe(
      (params: Params) => {
        this.recipeId = params['id']
        this.editMode = params['id'] != null
        console.log(this.editMode)
        this.initForm()
      }
    );
  }

  initForm() {
    let recipeName = ''
    let recipeDesc = ''
    let imagePath = ''
    let recipeIngredients = new FormArray([])
    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.recipeId)
      recipeName = recipe.name
      recipeDesc = recipe.description
      imagePath = recipe.imagePath
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup(
              {
                'name': new FormControl(ingredient.name, Validators.required),
                'amount': new FormControl(ingredient.amount, [Validators.required,
                  Validators.pattern(/^[1-9]+[0-9]*$/)
                ])
              }
            )
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(imagePath, Validators.required),
      'description': new FormControl(recipeDesc, Validators.required),
      'ingredients': recipeIngredients
    })
  }

  onSubmit() {
    const recipe = new Recipe(this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredients'])

    if (this.editMode) {
      this.recipeService.updateRecipe(this.recipeId, recipe)
      //this.editMode=false
    }
    else {
      this.recipeService.addRecipe(recipe)
    }
    this.onCancel()
  }

  addIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup
      ({
        'name': new FormControl(),
        'amount': new FormControl()
      })
    )
  }

  onCancel()
  {
    this.router.navigate(['../'],{relativeTo:this.route})
  }
  onDeleteIngredient(index:number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index)
  }

}
