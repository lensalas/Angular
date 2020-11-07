import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
selector: 'app-customers-list',
templateUrl: './customers-list.component.html',
styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {

breakpoint = 2;

customers: any;

constructor(private customerService: CustomerService,
            public afAuth: AngularFireAuth,
            config: NgbModalConfig, private modalService: NgbModal) {

              config.backdrop = 'static';
              config.keyboard = false;
             }

  ngOnInit() {
  this.getCustomersList();
  this.breakpoint = (window.innerWidth <= 1050) ? 1 : 1;
   }

   onResize(event) {
  this.breakpoint = (event.target.innerWidth <= 1050 ) ? 1 : 1;

  }

  getCustomersList() {
  this.customerService.getCustomersList().snapshotChanges().pipe(
    map(changes =>
      changes.map(c =>
        ({ key: c.payload.key, ...c.payload.val() })
      )
    )
  ).subscribe(customers => {
    this.customers = customers;
  });
  }

  deleteCustomers() {
  this.customerService.deleteAll().catch(err => console.log(err));
  }

  open(content) {
    this.modalService.open(content);
  }


}
