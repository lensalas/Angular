import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

private dbPath = '/customers';

customersRef: AngularFireList<Customer> = null;

constructor(private db: AngularFireDatabase) {
  this.customersRef = db.list(this.dbPath);
}

createCustomer(customer: Customer): void {
  this.customersRef.push(customer);
}

updateCustomer(key: string){
  return this.customersRef.remove(key);
}

deleteCustomer(key: string): Promise<void> {
  return this.customersRef.remove(key);
}

getCustomersList(): AngularFireList<Customer> {
  return this.customersRef;
}

deleteAll(): Promise<void> {
  return this.customersRef.remove();
}
}
