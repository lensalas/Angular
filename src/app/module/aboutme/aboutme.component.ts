import { Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {

  breakpoint = 1;

  @Output() childMessage = new EventEmitter<any>();

  constructor() {
   }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 900) ? 1 : 3;
  }

  onResize(event) {
  this.breakpoint = (event.target.innerWidth <= 900) ? 1 : 3;
  }


 }
