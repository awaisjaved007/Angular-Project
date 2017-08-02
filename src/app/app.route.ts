import {Routes} from "@angular/router";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {SigninComponent} from "./auth/signin/signin.component";

export const appRoute: Routes = [

  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'shopping-list', component: ShoppingListComponent}

];
