import { Component, EventEmitter, OnInit, Output } from '@angular/core';


import { NgForm } from '@angular/forms';
import { Address } from '../Address';
import Login from '../Login';
import { ServiceService } from '../service.service';
import { User } from '../User';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service:ServiceService) { }

  @Output()
  regEvent= new EventEmitter<string>();

  name:any;
  mobilenumber:any;
  addressline1:any;
  addressline2:any;
  city:any;
  state:any;
  country:any;
  zipcode:any;
  username:any;
  password:any;
  user:any;
  role:any;
  address:any;
  login:any;

  error:any;
  ngOnInit(): void {
  }

  // regForm=new FormGroup({

  //   id:new FormControl('',[Validators.required,Validators.pattern('[0-9]{3,5}')]),
  //   name:new FormControl('',[Validators.required,Validators.pattern('[A-Za-z]{1,20}')]),
  //   salary:new FormControl('',[Validators.required,Validators.min(10000),Validators.pattern('[0-9]{5,}')])

  // });

  register(f :NgForm)
  {
    this.address=new Address(this.addressline1,this.addressline2,this.city,this.state,this.country,this.zipcode);
    this.login=new Login(this.username,this.password);
    this.user=new User(this.name,this.mobilenumber,this.address,this.login);
    console.log(this.user);
    console.log(this.address);
    console.log(this.login);
    
     this.service.addReg(this.user,this.address,this.login)
    .subscribe(
     (data)=> {
        console.log(data);
        console.log("registered successfully");

        if(data==true){
          this.regEvent.emit('login');
    
        }
        else{
          this.error="please enter correct details";
        }
      }
    );

    
    

   
    
  }
}
