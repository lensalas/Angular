import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isCollapsed = true;

  constructor(public afAuth: AngularFireAuth) { }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    document.querySelector('#two').scrollIntoView({ behavior: 'smooth', block: 'center'});
    document.querySelector('#one').scrollIntoView({ behavior: 'smooth', block: 'center'});
  }

  ngOnInit(): void {
  }

}
