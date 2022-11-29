import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CategoryComponent } from './category/category.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegproductComponent } from './regproduct/regproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  {path:'product',component:UpdateproductComponent},
  {path:'category',component:CategoryComponent},
  {path:'regproduct',component:RegproductComponent},
  { path: 'customer', component: CustomerComponent },

  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent,
  AdminComponent,
  UpdateproductComponent,
  RegproductComponent,CategoryComponent
 ]
