import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }


  addToChart(product:Product){
    let item = CartItems.find(c => c.product.productId === product.productId) //if c's product id equals product's productId
    if(item){
      item.quantity+=1
    } else {
      let cartItem = new CartItem()
      cartItem.product = product;
      cartItem.quantity = 1
      CartItems.push(cartItem)
    }
  }

  deleteFromCart(product:Product){
    let item:CartItem = CartItems.find(c=> c.product.productId === product.productId)
    CartItems.splice(CartItems.indexOf(item), 1)
  }

  list():any{
    return CartItems
  }
}
