import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {

customer: Customer = new Customer();
submitted = false;

constructor(private customerService: CustomerService) { }

ngOnInit() {
}

newCustomer(): void {
  this.submitted = false;
  this.customer = new Customer();
}

save() {
  this.customerService.updateCustomer('');
  this.customerService.createCustomer(this.customer);

}

onSubmit() {
  this.submitted = true;
  this.save();
}

}
