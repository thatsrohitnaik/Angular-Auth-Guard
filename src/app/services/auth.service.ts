import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthorised = false;

  authenticate(cred){
    if(cred.username === "rohit"){
      if(cred.password === "abc"){
        this.isAuthorised = true;
      }
      else{
        this.isAuthorised = false;
      }
    }
    return this.isAuthorised;
  }
}
