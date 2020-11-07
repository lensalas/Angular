import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  breakpoint = 1;

  constructor() { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 800) ? 1 : 1;
  }

  onResize(event) {
  this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 1;
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
