import { Component, OnInit} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  breakpoint: any;

  constructor(public afAuth: AngularFireAuth) { }

  onclick() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 1080) ? 1 : 2;
  }

  onResize(event) {
  this.breakpoint = (event.target.innerWidth <= 1080) ? 1 : 2;
  }

}

