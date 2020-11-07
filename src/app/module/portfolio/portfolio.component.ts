import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  breakpoint = 1;

  constructor() { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 300) ? 2 : 4;
  }

  onResize(event) {
  this.breakpoint = (event.target.innerWidth <= 300) ? 2 : 4;
  }

}
