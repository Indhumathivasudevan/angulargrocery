import { Component, Input } from '@angular/core';
import { HomeComponent } from './home/home.component';
import Products from './Products';
import Status from './Status';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'myapp';


// changePage(n:Status,){
// this.flag=n.flag;
// this.role=n.role;

// }

pages:string="home";
uname:any;

pro:any;

changePage(s:string){
  this.pages=s;
  
}

changePages(s:Status){
  this.pages=s.ptype;
  this.uname=s.uname;
  
}

prodetails(p:Products){
  this.pro=p;

}


}


