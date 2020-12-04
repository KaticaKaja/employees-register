import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString:string, propName:string): any[] {
    const resultArray = [];

    if(value === undefined || value.length === 0 || filterString === '' || filterString === undefined || propName === ''){ // proveriti kasnije - cleancode
      return value;
    }
    const regExPattern = new RegExp("^.*"+filterString.toLowerCase()+".*$");
    for(const item of value){
      if(item[propName].toLowerCase().match(regExPattern)){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
