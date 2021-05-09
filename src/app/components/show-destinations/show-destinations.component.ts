import { Component, OnInit } from '@angular/core';
import {DestinationsService} from '../../services/destinations.service';
import {OrdersService} from '../../services/orders.service';

@Component({
  selector: 'app-show-destinations',
  templateUrl: './show-destinations.component.html',
  styleUrls: ['./show-destinations.component.css']
})
//קומפוננטה להצגת היעדים כולם
export class ShowDestinationsComponent implements OnInit {

  //משתנים לשמירת פרטי היעד החדש שהמשתמש יכול להוסיף
  destinations: string[]=[];
  idOrder: any;
  countTickets: any;
  customerName: string='';

  currentDestination: any;
  
  constructor(private destinationService: DestinationsService, private orders: OrdersService) {
    //שמירת היעדים במשתנה
    this.destinations= destinationService.getDestinations();
  }

  ngOnInit(): void {
  }

  //פעולה המוסיפה הזמנה חדשה
  add(){
    const newOrder={
      id: this.idOrder,
      nameCustomer: this.customerName,
      numTickets: this.countTickets,
      destination: this.currentDestination
    }
    this.orders.addOrder(newOrder);

  }

}
