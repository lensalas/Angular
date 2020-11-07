import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Inject} from '@angular/core';


@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss'],
})
export class AboutmeComponent implements OnInit {

  breakpoint = 1;

  @Output() childMessage = new EventEmitter<any>();

constructor() {}

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 900) ? 1 : 1;

  }

  onResize(event) {
  this.breakpoint = (event.target.innerWidth <= 900) ? 1 : 1;
  }

  onNavigate1() {
    window.open('https://github.com/lensalas', '_blank');
  }
  onNavigate2() {
    window.open('https://www.linkedin.com/in/len-salas-arguello/', '_blank');
  }
  onNavigate3() {
    window.open('https://www.linkedin.com/in/len-salas-arguello/', '_blank');
  }

 }
