import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFilter'
})
export class DataFilterPipe implements PipeTransform {

  transform(array: any[], query: string, searchKeyName?: string): any {
    if (query) {
      if (!searchKeyName) {
        searchKeyName = 'name';
      }

      const filteredData = array.filter(item => item[searchKeyName].toLowerCase().includes(query.toLowerCase()));
      return filteredData;
    }
    return array;
  }
}
