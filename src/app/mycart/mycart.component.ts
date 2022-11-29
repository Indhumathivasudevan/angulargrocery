import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Products from '../Products';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {
 

  constructor( private service:ServiceService) { }

  @Output()
  placeorderEvent= new EventEmitter<string>();

  @Input()
  username:any;

  @Input()
  product:any;

  useraddress: any;
  
  ngOnInit(): void {

  this.service.getuser(this.username).subscribe((data) => {
    console.log(data);
    this.useraddress=data;
  });
  }

  placeorder(){
    this.placeorderEvent.emit('payment');
  }
  change(){
    this.placeorderEvent.emit('delivery');
  }

}  
