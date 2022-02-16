import { Product } from "./product";
import { ResponseModel } from "./ResponseModel";

//we have message and success variables in all response models, therefore we implement the DRY principle 
//...and create a brand new ResponseModel for these two variables and use them by extending.
export interface ProductResponseModel extends ResponseModel{
    data:Product[] 
}