import { Component } from '@angular/core';
import { DemoserviceService } from './demoservice.service';
import { FormsModule }   from '@angular/forms';

import { FormGroup, FormControl, Validators} from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles:[`
      div {
         margin: 0 auto;
         text-align: center;
         width:200px;
      }
      .rotate {
         width:100px;
         height:100px;
         border:solid 1px red;
      }
   `],

  animations: [
    trigger('myanimation',[
       state('smaller',style({
          transform : 'translateX(200px)'
       })),
       state('larger',style({
          transform : 'translateX(0px)'
       })),
       transition('smaller <=> larger',animate('300ms ease-in'))
    ])
 ]
})
export class AppComponent {


  state: string = "smaller";
  animate() {
     this.state= this.state == 'larger' ? 'smaller' : 'larger';
  }

  public search:any = '';
  locked: any[] = [];

  title = 'HEY SSUP';
  todayDate;

  // declaring array of months

  months = ["january","feb","mar","apr","may","jun"];
  
  // setting it to true 

  isAvailable = true;

  currentdate = new Date();

  jsonvalues = {name:'sunny' ,age:'21', address:{a1:'hyderabad',a2:'chennai'}};

  myClickFunction(event) {
    
      this.isAvailable = !this.isAvailable; 
   
    //just added console.log which will display the event details in browser on click of the button.
    alert("Button is clicked");
    console.log(event);
  }
    changeMonthsEvent(event) {
      alert("Month Changed");
      console.log(event);
}

constructor(private myservice:DemoserviceService){}
    ngOnInit(){
      this.todayDate= this.myservice.showDate();
      this.locked =[
        {ID:1,User:'Rushi',AuthID: '68114' },
        {ID:2,User:'Sunny',AuthID: '68113' },
        {ID:3,User:'asc',AuthID: '68112'},
        {ID:4,User:'hi',AuthID: '68111'},
        {ID:5,User:'ibweb',AuthID: '64114'},
        {ID:6,User:'hihwhh',AuthID: '65114'}
            ]
    }







}