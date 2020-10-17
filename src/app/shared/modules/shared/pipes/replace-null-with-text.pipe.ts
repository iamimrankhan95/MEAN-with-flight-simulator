import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceNullWithText'
})
export class ReplaceNullWithText implements PipeTransform {

  transform(value: any, repleceText: string): any {
    if (value) {
      return value;
    }

    return repleceText;
  }
}
