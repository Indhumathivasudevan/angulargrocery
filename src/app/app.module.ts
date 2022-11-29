import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { AdminComponent } from './admin/admin.component';
import { MycartComponent } from './mycart/mycart.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { Router } from '@angular/router';
import { DeliveryComponent } from './delivery/delivery.component';

import { PaymentComponent } from './payment/payment.component';
import { SuccessComponent } from './success/success.component';
import { CardComponent } from './card/card.component';
import { CategoryComponent } from './category/category.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { RegproductComponent } from './regproduct/regproduct.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerComponent,
    AdminComponent,
    MycartComponent,
    HomeComponent,
    RegisterComponent,
    DeliveryComponent,
    PaymentComponent,
    SuccessComponent,
    CardComponent,
    CategoryComponent,
    UpdateproductComponent,
    RegproductComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
