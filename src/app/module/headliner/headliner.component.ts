import { Component, OnInit} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {MatSnackBar} from '@angular/material/snack-bar';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-headliner',
  templateUrl: './headliner.component.html',
  styleUrls: ['./headliner.component.scss'],

})
export class HeadlinerComponent implements OnInit {

  breakpoint = 0;
  isCollapsed = true;

  constructor(public afAuth: AngularFireAuth, private snackBar: MatSnackBar) { }


  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 1024) ? 1 : 2;
  }

  onResize(event) {
  this.breakpoint = (event.target.innerWidth <= 1024) ? 1 : 2;
  }

  toggleCollapse() {
    document.querySelector('#two').scrollIntoView({ behavior: 'smooth', block: 'center'});
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


  authError() {
    this.snackBar.open('You must be logged in to access this content', 'Ok', {
      duration: 5000,
      verticalPosition: 'top'
    });
    return this.snackBar._openedSnackBarRef
    .onAction()
    .pipe(
      tap(_ =>
        document.querySelector('#two').scrollIntoView({ behavior: 'smooth', block: 'center'})
        )
    )
    .subscribe();
  }


}
