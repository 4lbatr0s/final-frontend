import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  //value: the value that we want to change, 
  //rate: first parameter, if we had another parameter, then we'd to additionally declare it.
  transform(value: number, rate:number): number {
    let priceWithVat:number = value + (value*rate/100)
    return priceWithVat
  }

}
