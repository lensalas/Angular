import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

@Component({
selector: 'app-customer-details',
templateUrl: './customer-details.component.html',
styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

@Input() customer: Customer;

constructor(private customerService: CustomerService) { }

ngOnInit() {
}


deleteCustomer() {
  this.customerService
    .deleteCustomer(this.customer.key)
    .catch(err => console.log(err));
}

}
