import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
//שרת ששומר את היעדים לטיסות
export class DestinationsService {

  //מערך יעדים
  private destinations:string[]= ["America","Israel","Pariz","Turkey","Russia","London"];

  constructor() { }

  //פונקציה שמחזירה את מערך היעדים
  getDestinations(){
    return this.destinations;
  }

  //פונקציה שמוסיפה יעד חדש למערך היעדים
  addDestinations(des: string){
    this.destinations.push(des);
  }
}
