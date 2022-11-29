import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Status from '../Status';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {


  type:any="";
  @Output()
  payEvent=new EventEmitter<string>();
 
   constructor() { }
 
   ngOnInit(): void {
   }

   flag:boolean=true;
  payment(type:any){
   console.log(type)
  if(type=="cash"){
   this.payEvent.emit("success");
  }else{
   this.payEvent.emit("card");
   
  }
 
 }


}
