import {Component, OnInit} from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature: string = "recipe"

  ngOnInit(){
    firebase.initializeApp(
      {
        apiKey: "AIzaSyDdo2-I0CCSOa8BV0I7gMLsD8Ea-xya8Nw",
        authDomain: "ng-app-recipe.firebaseapp.com"
      }
    )
  }
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
