import * as firebase from "firebase/app";
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthService{
  token:string = null

  constructor(private router:Router){}

  signupUser(user:string,pwd:string){


    this.getToken()
    firebase.auth().createUserWithEmailAndPassword(user,pwd).catch(
      error=>console.log(error)
    )
  }

  signinUser(user:string,pwd:string){


    firebase.auth().signInWithEmailAndPassword(user,pwd).then(
      response => {

        this.router.navigate(['/']);
        console.log(response)
        this.getToken()
      }

    ).catch(
      error=>console.log(error)
    )
  }

  logoutUser(){
    firebase.auth().signOut()
    this.token = null
    this.router.navigate(['/signin']);
  }

  getToken()
  {

    firebase.auth().currentUser.getToken().then(
      (token:string) => this.token = token
    )
    return this.token
  }

  isAuthenticated(){
    return this.token != null
  }
}
