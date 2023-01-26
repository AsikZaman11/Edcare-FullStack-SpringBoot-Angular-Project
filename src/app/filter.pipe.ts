import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filtersString: string, propName:string):any[]{
    const result:any=[];
    if(!value || filtersString===''||propName===''){
      return value;
    }
    value.forEach((a:any)=>{
      if(a[propName].trim().toLowerCase().includes(filtersString.toLowerCase())){
        result.push(a);
      }
    });
    return result;
  }

}
