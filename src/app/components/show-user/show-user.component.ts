import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
//קומפוננטה להצגת המשתמש ואפשרויות כניסה 
export class ShowUserComponent implements OnInit {

  currentuser: string="";
  constructor(private loginService: LoginService) { 
    //שמירת המשתמש הנוכחי במשתנה
    this.currentuser= loginService.getCurrentUser();
  }

  ngOnInit(): void {
  }

  x: number=1;
  enterAgent(){
    this.x=2;
  }

  pass: number=0;
  //פונקציה שמכניסה את המשתמש כסוכן
  enterAsAgent(){
    if(this.pass==1234){
      this.loginService.setUser();
      alert("נכנסת כסוכן");
    }
  }

}
