import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
// import {HttpClient} from '@angular/common/http'; //to fetch data from the API.

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[] = []
  dataLoaded:boolean= false
  filterText:string = ""
  currentProduct:Product
  constructor(private productService:ProductService,
     private activatedRoute:ActivatedRoute,
     private toastr:ToastrService,
     private cartService:CartService
     ) { } //creates an instance of ProductComponent class in the memory.

  ngOnInit(): void { //it's the first method to be executed when our ProductComponent placed in DOM hierarchy
    this.activatedRoute.params.subscribe(params => {
      if(params["categoryId"]) //categoryId because we gave the route as categoryId in app.route.module.ts file.
      {
       this.getProductsByCategory(params["categoryId"]) //if there is a categoryExist, then return getProductsByCategoryId 
      } 
      else {
        this.getProducts()
      }
    
    })
  }

  //we'll create a function to get Products from our API,
  //write the function here for you would'nt want your code to become an Italian chief's special. 
  getProducts(){
    this.productService.getProducts().subscribe(response => {
      this.products = response.data
      this.dataLoaded = true
    })
  }

  getProductsByCategory(categoryId:number){
    this.productService.getProductsByCategoryId(categoryId).subscribe(response => {
      this.products = response.data
      this.dataLoaded = true
    })
  }


  addToCart(product:Product){
    if(product.productId===1){
      this.toastr.error("Error", "This product cannot be send to the cart.")
    } else{
      this.cartService.addToChart(product)
      this.toastr.success(product.productName + " added to cart")
    }
  }



  
  test() {
    this.toastr.success("I'm a toast!", "Success!");
  }
  
}
