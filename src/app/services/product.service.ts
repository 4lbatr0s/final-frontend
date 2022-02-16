import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductResponseModel } from '../models/productResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = "https://localhost:44343/api/Products/getall"
  constructor(private httpClient:HttpClient) { }


  //observable makes this function subscribable, 
  //make your request to apiUrl
  //return a subscriable ProductResponseModel, for we'll subscribe in the relevant component.ts file. 
  getProducts():Observable<ProductResponseModel>{ 
    return this.httpClient.get<ProductResponseModel>(this.apiUrl)
  }
}
