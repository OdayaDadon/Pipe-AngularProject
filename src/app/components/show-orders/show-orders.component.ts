import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../../services/orders.service';

@Component({
  selector: 'app-show-orders',
  templateUrl: './show-orders.component.html',
  styleUrls: ['./show-orders.component.css']
})
//קומפוננטה להצגת ההזמנות כולם
export class ShowOrdersComponent implements OnInit {

  orders: any;
  constructor(private ordersService: OrdersService) {
    //שמירת ההזמנות במשתנה
    this.orders= ordersService.getOrders();
  }

  ngOnInit(): void {
  }



}
