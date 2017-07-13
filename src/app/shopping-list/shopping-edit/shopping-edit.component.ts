import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
  providers:[]
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameRef : ElementRef
  @ViewChild('amountInput') amountRef : ElementRef

  constructor(private shopList:ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem()
  {
    const ingName = this.nameRef.nativeElement.value;
    const ingAmount = this.amountRef.nativeElement.value;
    const ingredient = new Ingredient(ingName,ingAmount)
    this.shopList.addIngredient(ingredient)
  }
}
