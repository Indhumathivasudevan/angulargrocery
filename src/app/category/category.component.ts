import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  cat:any="";
  res:any="";

  constructor(private util:ServiceService) { }

  ngOnInit(): void {
    
  }

  public save(n:NgForm){
  
    this.util.save1(this.cat).subscribe(
      {
      next:(data)=>this.res=data     }
    );
   }

}
