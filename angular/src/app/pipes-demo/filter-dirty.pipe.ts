import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'filterDirty',
    pure: false
})
export class FilterDirtyPipe implements PipeTransform {

    transform(value: any, filterString: string): any {
        console.log(value, filterString);
        if (value.length === 0) {
            return value;
        }
        const resultArray = [];
        for (const item of value) {
            if (item.status === filterString) {
                resultArray.push(item);
            }
        }
        return resultArray;
    }

}
