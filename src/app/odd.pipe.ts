import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'odd'
})
export class OddPipe implements PipeTransform {

  transform(value:string,value2:string) {
    return value.includes(value2) 
  }

}
