import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Products from '../Products';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output()
  page = new EventEmitter<string>();

  flag:boolean=true;
  productList: Products[]=[];
  product: any;

  constructor(private service:ServiceService) { }

  ngOnInit(): void {

    this.service.Groceryproducts().subscribe((data) => {
      this.productList.push(data);
      console.log(this.productList);
      for(var pro of this.productList){
        console.log("elements");
        console.log(pro);
        this.product=pro;

        }

    });
  }



  login() {
   this.page.emit("login");

  }

  register(){
    this.page.emit("register");
  }


  about(){
this.flag=false;
  }
  home(){
   this.flag=true; 
  }


  add(){
    this.page.emit('login');
  }
}
