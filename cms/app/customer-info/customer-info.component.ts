import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Observable} from 'rxjs';
import 'rxjs/add/observable/of';
import {Router} from '@angular/router';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {
  customerName : string;
  custId : number;
  customer : Customer;
  constructor(private customerService : CustomerService) {
    this.customerName = localStorage.getItem("user");
    this.customerService.findByCustomerName(this.customerName).subscribe( x => {
       this.customer=x;
       localStorage.setItem('customer', JSON.stringify(this.customer));
       this.custId=x.cusId;
     },
    err => {
      console.log(err);
    }) 
   }

  ngOnInit() {
    // this.custId=this.customer.cusId;
    // alert(this.custId);
  }
}
