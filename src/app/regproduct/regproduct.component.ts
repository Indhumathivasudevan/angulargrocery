import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Category from '../Category';
import Products from '../Products';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-regproduct',
  templateUrl: './regproduct.component.html',
  styleUrls: ['./regproduct.component.css']
})
export class RegproductComponent implements OnInit {

  constructor( private util :ServiceService) { }

 
  t:any;
  productName:any;
  cost:any;
  discount:any;
  category:any;
  description:any;
  rating:any;
  image:any;
  status:string="";


 
  categories:Category[]=[]; 

  

  ngOnInit(): void {
    let s=this.util.showCategory();
    s.subscribe((data)=>this.categories=data);
    console.log(this.categories);
     
  }

  public registerProduct(f:NgForm){
  let  product:Products=new Products(0,this.productName,this.cost,this.discount,this.description,this.rating,this.image);     
        let s= this.util.saveProduct(this.category,product);
       
        console.log(product)
        s.subscribe((data)=>this.status=data)
        alert(this.status);
        console.log(this.status)

  }

  public update(e:any){
        this.category=e;
  }
}
