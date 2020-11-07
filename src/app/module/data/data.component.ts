import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  breakpoint = 0;

  constructor() {

  }



  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 1024) ? 1 : 2;
  }

  onResize(event) {
  this.breakpoint = (event.target.innerWidth <= 1024) ? 1 : 2;
  }

}
