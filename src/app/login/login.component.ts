import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServiceService } from '../service.service';
import User from '../Login';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, OutletContext, Route } from '@angular/router';
import Status from '../Status';
import { Router } from '@angular/router';
import Login from '../Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: ServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {


  }
  
  @Output()
  loginEvent= new EventEmitter<Status>();
  username: string = "";
  password: string = "";
  error: String = "";
  u:any;
  e: any;
  s:any;
  flag:any;
  status:any;
  
  login(f: NgForm) {
    console.log(f);

    console.log(this.username);

    this.e = this.service.validateUser(new Login(this.username, this.password))
      .subscribe({
        next: (data) => {
          console.log(data);
          if (data.flag == false) {
            this.error = "Please enter correct details"
          } else {
            this.u = data.user;
            this.service.setBearerToken(data.token);

            console.log(this.service.getBearerToken());

            this.s=data.role;
            if (this.s =='admin') {
              this.status=new Status("admin",this.username);


              this.loginEvent.emit(this.status);

            }
            else{
              this.status=new Status("customer",this.username);
              this.loginEvent.emit(this.status);
            }
            //   this.router.navigate(['admin'], { relativeTo: this.route })
            //   this.flag=false;
            // }
            // else {
            //   this.router.navigate(['customer'], { relativeTo: this.route });
            // }



          }
        }
      });
  }

}
