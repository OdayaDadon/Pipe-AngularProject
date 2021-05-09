import { Component } from '@angular/core';
import { from } from 'rxjs';
import {colors} from '../data/colors';
import {LoginService} from './../../src/app/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  current:string='';
  constructor(private loginService: LoginService){
    this.current= this.loginService.getCurrentUser();
  }

  agent="Agent";

  date: Date= new Date();
  price: number=15;

  task: any={
    name: "odaya",
    phone: "0548421350"
  };
  firstName: string="odaya";
  lastName: string="DADON";
 

}
