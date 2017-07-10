import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipes.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] =
    [new Recipe('A test recipe', 'This is a test recipe',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLCrg0wbGhPIuq-_k9cWZZpZ_er8F1PuifDR57DEmFl4sy98s1LA'
    )];

  constructor() {
  }

  ngOnInit() {
  }

}
