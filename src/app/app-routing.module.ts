import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:ProductComponent}, //open product component in localhost:4200 pathMatch:"localhost:4200","path:"
  {path:"products", component:ProductComponent }, //open product component in localhost:4200/products
  {path:"products/category/:categoryId", component:ProductComponent} //bring products by category id.
]; //routes.

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
