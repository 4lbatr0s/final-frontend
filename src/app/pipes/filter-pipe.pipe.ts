import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  //ask all the time 
  //1. what data is going to change ? answer is value
  //2. what parameter are we going to use? then it comes after the value
  //3. what data are we going to return ? answer is our return type.
  transform(value: Product[], filterText: string): Product[] {
     filterText = filterText ? filterText.toLocaleLowerCase() : "" //if there are any filterText then make a local change (ç => Ç not ç => C)
     let filteredProducts:Product[] = filterText ? value.filter((p:Product) => p.productName.toLocaleLowerCase().indexOf(filterText)!==-1):value
     return filteredProducts 
    }


  //filter function
}
