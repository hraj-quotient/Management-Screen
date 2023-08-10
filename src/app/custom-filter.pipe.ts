import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {

  transform(value: any[],columnName: string ,filterValue: String): any{
   
    if(!value || !columnName || !filterValue){
      return value;
    }
    return value.filter(item => {
      const columnData = item[columnName];
      console.log(columnData)
      return columnData && columnData.toString().toLowerCase().includes(filterValue.toLowerCase());
    });

  }

}
