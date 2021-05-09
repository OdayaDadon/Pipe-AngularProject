import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//שרת ששומר את פרטי המשתמש 
export class LoginService {

  private users= ["Agent","Customer"];

  //משתמש נוכחי
  private currentUser = "Agent";

  //פונקציה שמחזירה את המשתמש הנוכחי
  getCurrentUser(){
    return this.currentUser;
  }

  getUsers(){
    return this.users;
  }

  //פונקציה שמשנה את המשתמש הנוכחי להיות סוכן
  setUser(){
    if(this.currentUser=="Customer")
        this.currentUser="Agent";
  }

  constructor() { }
}
