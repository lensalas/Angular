import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {


   @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();


  constructor(public afAuth: AngularFireAuth) { }


  toggleSideBar() {
    this.toggleSideBarForMe.emit();
}

login() {
  document.querySelector('#two').scrollIntoView({ behavior: 'smooth', block: 'center'});
  this.toggleSideBarForMe.emit();
}

}


