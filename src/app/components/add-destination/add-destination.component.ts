import { Component, OnInit } from '@angular/core';
import {DestinationsService} from '../../services/destinations.service';

@Component({
  selector: 'app-add-destination',
  templateUrl: './add-destination.component.html',
  styleUrls: ['./add-destination.component.css']
})
//קומפוננטה להוספת יעד חדש
export class AddDestinationComponent implements OnInit {

  constructor(private destinationService: DestinationsService) { 
  }

  ngOnInit(): void {
  }

  //הוספת יעד חדש
  newDestination: string="";
  addDestination(){
    this.destinationService.addDestinations(this.newDestination);
    this.newDestination="";
  }

}
