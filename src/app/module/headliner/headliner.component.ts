import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-headliner',
  templateUrl: './headliner.component.html',
  styleUrls: ['./headliner.component.scss']
})
export class HeadlinerComponent implements OnInit {

  breakpoint = 1;
  isCollapsed = true;

  constructor() { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 1080) ? 1 : 2;
  }

  onResize(event) {
  this.breakpoint = (event.target.innerWidth <= 1080) ? 1 : 2;
  }

  toggleCollapse() {
    document.querySelector('#two').scrollIntoView({ behavior: 'smooth', block: 'center'});
  }
}
