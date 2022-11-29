import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import Login from './Login';
import { Address } from './Address';
import { User } from './User';
import Products from './Products';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) { }

  //jwt 

  validateUser(user: Login): Observable<any> {
    return this.httpClient.post<any>("http://localhost:8086/authenticate",
      { "username": user.username, "password": user.password }, { responseType: "json" });

  }

  setBearerToken(token: string) {
    sessionStorage.setItem('bearerToken', token);
  }

  getBearerToken() {
    return sessionStorage.getItem('bearerToken');
  }


  authenticate() {
    const token = this.getBearerToken();
    if (token != null) {
      return this.httpClient.post('http://localhost:8086/validate', {}, {
        headers: new HttpHeaders().set('Authorization', "Bearer " + token)

      })
    } else {
      return this.httpClient.post('http://localhost:8086/validate', {}, {
        headers: new HttpHeaders().set('Authorization', "")
      })
    }
  }

  //jwt end//


  //register user//  

  addReg(user: User, address: Address, login: Login) {
    // console.log(JSON.stringify);
    console.log(user);
    console.log("hello from service" + user.name);
    console.log(user.login);
    console.log(user.login.username);
    return this.httpClient.post<any>("http://localhost:8087/regUser",
      {
        "name": user.name,
        "mobileNumber": user.mobilenumber,
        "address": {
          "addressLine1": address.addressLine1,
          "addressLine2": address.addressLine2,
          "city": address.city,
          "state": address.state,
          "country": address.country,
          "zipCode": address.zipCode
        },
        "login": {
          "userName": login.username,
          "password": login.password,
          "role": ""
        }
      }
    );
  }
  //end register user//

  count: number = 0;
  ar = new Array<Products>();

  Groceryproducts(): Observable<any> {

    return this.httpClient.get<any>("http://localhost:8087/findAllproducts");
  }

  getCount() {

    return this.count;

  }

  addCount() {

    this.count += 1;
  }

  adval(n: Products): Array<Products> {
    this.ar.push(n);
    console.log("indhuarray");
    console.log(this.ar);
    return this.ar;
  }



  remar() {
    for (let i = 0; i < this.ar.length; i++) {
      this.ar.pop();
    }
  }
  updateaddress(username: String, a: Address) {
    return this.httpClient.put<any>("http://localhost:8087/updateAddress/"+username, {
      "addressLine1": a.addressLine1,
      "addressLine2": a.addressLine2,
      "city": a.city,
      "state": a.state,
      "country": a.country,
      "zipCode": a.zipCode
    });
  }

   getuser(username: String) {
    return this.httpClient.get<any>("http://localhost:8087/showuser/"+username);
  }

  //Manoj  admincode//


  // public registerUser(user:UserForRegister){
  //  return this.httpClient.post<any>("http://localhost:8085/regUser/",user,{responseType:'User'as'json'})
  // }


  public save1(category: any): Observable<any> {
    return this.httpClient.get<any>("http://localhost:8087/regCategory/" + category);
  }

  public saveProduct(category: any, product: Products): Observable<any> {

    let c = this.httpClient.put<any>("http://localhost:8087/regProduct/" + category, product,
     { responseType: 'text' as 'json' });
    console.log(c)
    return c;
  }


  public showCategory(): Observable<any> {
    return this.httpClient.get<any>("http://localhost:8087/listCategory");
  }

  public getAllProduct() {
    return this.httpClient.get<any>("http://localhost:8087/findAllproducts");
  }

  public updateProduct(p: Products) {
    return this.httpClient.post("http://localhost:8087/updateProduct", p, { responseType: 'Product' as 'json' });

  }
  public deleteProduct(p: number) {
    return this.httpClient.delete("http://localhost:8087/delProduct/" + p)
  }

  // public getOrders(user:any){
  // this.httpClient.get<Order[]>("http://localhost:8085/orderByUser/"+user).subscribe(data=>{
  // return data;
  // })
  // }

  //end of manoj admin code //




}
