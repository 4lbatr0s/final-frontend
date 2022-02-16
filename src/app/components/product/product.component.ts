import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { ProductService } from 'src/app/services/product.service';
// import {HttpClient} from '@angular/common/http'; //to fetch data from the API.

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  products:Product[] = []


  constructor(private productService:ProductService) { } //creates an instance of ProductComponent class in the memory.

  ngOnInit(): void { //it's the first method to be executed when our ProductComponent placed in DOM hierarchy
    this.getProducts()
  }


  //we'll create a function to get Products from our API,
  //write the function here for you would'nt want your code to become an Italian chief's special. 
  getProducts(){
    this.productService.getProducts().subscribe(response => {
      this.products = response.data
    })
  }
}
