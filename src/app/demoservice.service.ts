import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoserviceService {

  constructor() { }

  showDate(){
    let ndate = new Date();
    return ndate;
  }
}
