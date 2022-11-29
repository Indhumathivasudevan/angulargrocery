import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { NgForm } from '@angular/forms';
import Products from '../Products';

import { ServiceService } from '../service.service';
import Status from '../Status';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {




  @Output()
  cartEvent = new EventEmitter<Status>();
  @Output()
  cartDetails = new EventEmitter<Products>();
  @Input()
  username: any;

  flag: boolean = true;
  user: any;
  status: any;
  productList: Products[] = [];
  product: any;
  count: any;
  ar: any;
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.authenticate().subscribe({
      next: (data) => {
        console.log(data);
      },
    });



    this.service.Groceryproducts().subscribe((data) => {
      this.productList.push(data);
      console.log(this.productList);
      for (var pro of this.productList) {
        console.log("elements");
        console.log(pro);
        this.product = pro;

      }

    });

  }


  changePage() {
    this.status = new Status('mycart', this.username);
    this.cartEvent.emit(this.status);
  }
  add(e:any) {

    console.log("clicked")
    this.service.addCount();
    this.count = this.service.getCount();
    this.ar = this.service.adval(e);
    console.log("arrayvalue");
    console.log(this.ar);
    this.cartDetails.emit(this.ar);
  }
  about() {
    this.flag = false;
  }
  home() {
    this.flag = true;
  }





}



