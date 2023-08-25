import { Component, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableColumn } from '../../models_lib/column-name-lib.model';

@Component({
  selector: 'lib-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {
  
@Input() settingObject:any;
@Output() outputEmitter:EventEmitter<{option: string, row:any}> =new EventEmitter();
  
  

pageNumber!: number;
dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
options:any;
column: TableColumn[]=[];
pageSizeOptions:any;
flagForFilters:any;
sortData:any;
optionSelected:any;
rowSelected:any;



@ViewChild(MatPaginator, {static:true}) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;

constructor(){
  this.dataSource.filterPredicate = this.customFilterPredicate();
}


ngOnInit(){
this.dataSource.data=this.settingObject.data;
this.column=this.settingObject.tableColumn;
this.pageSizeOptions=this.settingObject.pageSizes;
this.sortData=this.settingObject.sort;
this.flagForFilters=this.settingObject.columnFilter;

this.emitOut();
}


ngAfterViewInit() {
this.dataSource.sort = this.sort;
this.sort.sort({id: this.sortData.id, start: this.sortData.start, disableClear: this.sortData.disableClear});
this.dataSource.paginator = this.paginator;
}

ngOnchange(changes: SimpleChanges){
if(this.dataSource){  
this.dataSource.paginator = this.paginator;
this.paginator.pageSize = this.pageSizeOptions[0]; //change
}
}

applyFilter( filterValue: string, columnKey?: string): void {
  this.dataSource.filter = JSON.stringify({ columnKey, filterValue });
}

customFilterPredicate(): (data: any, filter: string) => boolean {
  const filterData = (data: any, filter: string): boolean => {
    const searchTerms = JSON.parse(filter);
    return data[searchTerms.columnKey]
      .toString()
      .toLowerCase()
      .includes(searchTerms.filterValue.toLowerCase());
  };
  return filterData;
}

// goToPage() {
// this.paginator.pageIndex = this.pageNumber - 1;
// this.paginator.page.next({
// pageIndex: this.paginator.pageIndex,
// pageSize: this.paginator.pageSize,
// length: this.paginator.length
// });
// }

onOptionClick(option: string, row: any) {
  this.rowSelected=row;
  this.optionSelected=option;
  this.outputEmitter.emit({option,row});
}

emitOut(){
 this.onOptionClick(this.optionSelected,this.rowSelected);
}


getColumnKeys(): string[] {
  return this.column.map((column: any) => column.key);
}


}
