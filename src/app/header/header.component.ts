import {Component, EventEmitter, Output} from "@angular/core";
import {DataStorageService} from "../shared/data.storage.service";
import {Response} from "@angular/http";
import {AuthService} from "../auth/auth.service";
import * as firebase from "firebase";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})

export class HeaderComponent {

  constructor(private storeageService: DataStorageService, private authService :AuthService) {
  }

  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature)
  }


  onSaveData() {
    this.storeageService.storeRecipes().subscribe(
      (response: Response) => {
        console.log(response)
      }
    )
  }

  onLogout(){
    this.authService.logoutUser()
  }

  onFetchData() {
    this.storeageService.getRecipes()
  }
}
