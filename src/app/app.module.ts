import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowDestinationsComponent } from './components/show-destinations/show-destinations.component';
import { ShowUserComponent } from './components/show-user/show-user.component';
import { ShowOrdersComponent } from './components/show-orders/show-orders.component';
import { AddDestinationComponent } from './components/add-destination/add-destination.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowDestinationsComponent,
    ShowUserComponent,
    ShowOrdersComponent,
    AddDestinationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
