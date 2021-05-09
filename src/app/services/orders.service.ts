import { Injectable } from '@angular/core';
import {DestinationsService} from './destinations.service';

@Injectable({
  providedIn: 'root'
})

//שרת ששומר לי את ההזמנות
export class OrdersService {

  constructor(private destinationsService: DestinationsService)  { 

  }

  //מערך הזמנות
  private orders=[{
    id: 1,
    nameCustomer: "odaya",
    numTickets: 2,
    destination: this.destinationsService.getDestinations()[0]
  },{
    id: 2,
    nameCustomer: "chani",
    numTickets: 2,
    destination: this.destinationsService.getDestinations()[1]
  },{
    id: 3,
    nameCustomer: "shani",
    numTickets: 5,
    destination: this.destinationsService.getDestinations()[2]
  },{
    id: 4,
    nameCustomer: "shify",
    numTickets: 10,
    destination: this.destinationsService.getDestinations()[3]
  },{
    id : 5,
    nameCustomer: "tzipy",
    numTickets: 3,
    destination: this.destinationsService.getDestinations()[4]
  },{
    id: 6,
    nameCustomer: "miri",
    numTickets: 1,
    destination: this.destinationsService.getDestinations()[5]
  }];

  //פונקציה שמחזירה את מערך ההזמנות
  getOrders(){
    return this.orders;
  }

  //פונקציה שמוסיפה הזמנה חדשה למערך
  addOrder(order: any){
    this.orders.push(order);
  }


}
