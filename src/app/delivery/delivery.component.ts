import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  constructor(private service:ServiceService) { }

  @Input()
  username:any;
  address:any;

  ngOnInit(): void {
  }
  save(){
    this.service.updateaddress(this.username,this.address).subscribe((data)=>
    {
      console.log(data);
      
    })
  }

}
