import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(value: Array<any>, filterString: string, propName: string): Array<any> {

        if (!Array.isArray(value)) return [];
        if (value.length === 0) return [];
        if (!filterString) return value;
        if (!propName) return value;
        filterString = filterString.toLowerCase();

        return value.filter(item => {
            return item[propName].toLowerCase().includes(filterString);
        });
    }

}
