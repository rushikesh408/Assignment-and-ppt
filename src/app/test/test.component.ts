import { Component, OnInit } from '@angular/core';
import { DemoserviceService } from './../demoservice.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
    firstVar = "Entered in 1st child component"

    todayDate;




  constructor(private myservice:DemoserviceService) { }

  ngOnInit() {
    this.todayDate=this.myservice.showDate();
  }

}
