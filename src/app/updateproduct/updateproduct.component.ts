import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Category from '../Category';
import Products from '../Products';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  productId:any;
  productName:any;
  cost:any;
  discount:any;
  category:any;
  description:any;
  rating:any;
  image:any;

  categories:Category[]=[];   
  products:Products[]=[];
  pro:Products=new Products(0,"",0,0,
    "",0,""); 
  UpdateResponse:any="";

  proForUpdate:Products=new Products(0,"",0,0,
  "",0,""); 

 


  productflag:boolean=true;
  editflag:boolean=false;
  deleteflag:boolean=false;

  constructor(private util:ServiceService) { }

  ngOnInit(): void {
    let products=this.util.getAllProduct();
    products.subscribe((data)=>this.products=data)
   // console.log(this.products); 


    let s=this.util.showCategory();
    s.subscribe((data)=>this.categories=data);
   // console.log(this.categories);
  }

  edit(p:Products){
    this.editflag=true;
    this.productflag=false;
    this.pro=p;
    //console.log(this.pro);
  }
  deleteproduct(p:Products){
    let e=this.util.deleteProduct(p.productId)
    e.subscribe((data)=>this.UpdateResponse=data)
    console.log(p)
    alert(this.UpdateResponse);
   
  }

  editProduct(p:NgForm){
  //let Productedit:Product=new Product(this.pro.productId,this.pro.productName,this.pro.cost,this.pro.discount,this.pro.description,p.rating,p.image); 
    let s=this.util.updateProduct(this.pro);
    s.subscribe(data=>{
      this.UpdateResponse=data})
    console.log(this.UpdateResponse)
    this.editflag=false;
    this.productflag=true;
    alert("success")
  // this.proForUpdate.cost=p.cost;
  }
  cancelEdit(){
    this.editflag=false;
    this.productflag=true;

  }

}
