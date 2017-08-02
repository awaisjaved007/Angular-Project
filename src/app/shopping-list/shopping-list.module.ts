
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ShoppingEditComponent} from "./shopping-edit/shopping-edit.component";
import {ShoppingListComponent} from "./shopping-list.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations:[
    ShoppingEditComponent,
    ShoppingListComponent
  ],
  imports:[
    CommonModule,
    SharedModule
  ],
  exports:[

  ]
})
export class ShoppingListModule{


}
