import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
  providers: []
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') shopListForm: NgForm

  subscription: Subscription
  editedItemIndex: number
  editedItem: Ingredient
  editMode: boolean = false

  constructor(private shopList: ShoppingListService) {
  }

  ngOnInit() {
    this.subscription = this.shopList.itemEdited.subscribe(
      (id: number) => {
        this.editMode = true
        this.editedItemIndex = id;
        this.editedItem = this.shopList.getIngreditent(id)
        this.shopListForm.setValue({
          'name': this.editedItem.name,
          'amount': this.editedItem.amount
        })
      }
    )
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const ingredient = new Ingredient(value.name, value.amount)
    if (this.editMode) {
      this.shopList.updateIngredient(this.editedItemIndex, ingredient)
      this.editMode=false
    }
    else {
      this.shopList.addIngredient(ingredient)
    }

    this.shopListForm.resetForm()
  }

  onClear(){
    this.shopListForm.resetForm()
    this.editMode=false
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  onDelete(){
    this.onClear()
    this.shopList.deleteIngredient(this.editedItemIndex)
  }
}
