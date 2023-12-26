import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'puissance'
})
export class PuissancePipe implements PipeTransform {

  transform(value: number, puissance: number): number {
    let result = 1;
    for (let i = 0; i < puissance ; i++){
      result = value * result;
    }
    return result;
  }

}
