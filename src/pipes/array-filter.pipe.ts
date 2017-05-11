import { Injectable, Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "filter",
    pure: false
})
@Injectable()
export class ArrayFilterPipe implements PipeTransform {

    // transform(items: Array<any>, conditions: {[field: string]: any}): Array<any> {
    //     return items.filter(item => {
    //         for (let field in conditions) {
    //             if (item[field] !== conditions[field]) {
    //                 return false;
    //             }
    //         }
    //         return true;
    //     });
    // }

    //TODO : Ajouter le lowercase

    transform(items: any[], filter: string): any {
        if (!items || !filter) {
            return items;
        }
        return items.filter(item => item.tags.indexOf(filter.toLowerCase()) !== -1);
    }
}
