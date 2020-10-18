import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {



  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() { }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
  }
  }

