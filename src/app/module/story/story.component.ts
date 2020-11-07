import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
