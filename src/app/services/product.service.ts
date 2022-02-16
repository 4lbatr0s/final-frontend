import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = "https://localhost:44343/api/"
  constructor(private httpClient:HttpClient) { }


  //observable makes this function subscribable, 
  //make your request to apiUrl
  //return a subscriable ProductResponseModel, for we'll subscribe in the relevant component.ts file. 
  getProducts():Observable<ListResponseModel<Product>>{ 
    let newPath = this.apiUrl + "products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newPath)
  }

  getProductsByCategoryId(categoryId:number):Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl + `Products/bycategoryid?categoryId=${categoryId}`
    return this.httpClient.get<ListResponseModel<Product>>(newPath)
  }
}
