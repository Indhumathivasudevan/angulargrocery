import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  user:any;

  @Input()
  username:any;


  constructor(private service:ServiceService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.service.authenticate().subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }



}
