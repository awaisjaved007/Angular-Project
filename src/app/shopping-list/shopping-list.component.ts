import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs/Subscription";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {

  ingredients: Ingredient[] = []
  subscirption:Subscription;

  constructor(private shopService: ShoppingListService) {

  }

  ngOnInit() {
    this.ingredients = this.shopService.getIngredients()
    this.subscirption = this.shopService.ingredientChanged.subscribe(
      (ingridents: Ingredient[]) => {
        this.ingredients = ingridents
      }
    )

  }

  ngOnDestroy()
  {
    this.subscirption.unsubscribe()
  }

  onEditItem(id:number){
    this.shopService.itemEdited.next(id)
  }

}
