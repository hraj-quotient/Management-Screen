import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableColumn, UserData } from '../../models/column-name-lib.model';

@Component({
  selector: 'lib-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {
  @Input() apiData: any;
  @Input() option:any;
  @Input() column: TableColumn[]=[];
  @Input() columnNames:any;
  @Input() pageSizeOptions:any;

pageNumber!: number;
dataSource: MatTableDataSource<UserData> = new MatTableDataSource<UserData>([]);
column2: string = '';
column3: string = '';
column4:string='';
options:any;
maps = new Map<string, string>();
pageSize:number=10;



@ViewChild(MatPaginator, {static:true}) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;


ngOnInit(){
this.dataSource.data=this.apiData;
this.options=this.option;
this.maps.set("col1",this.columnNames[0]);
this.maps.set("col2",this.columnNames[1]);
this.maps.set("col3",this.columnNames[2]);
this.maps.set("col4",this.columnNames[3]);

console.log(JSON.stringify(this.dataSource.data));

}


ngAfterViewInit() {
this.dataSource.sort = this.sort;
this.dataSource.paginator = this.paginator;
}

ngOnchange(changes: SimpleChanges){
if(this.dataSource){  
this.dataSource.paginator = this.paginator;
this.paginator.pageSize = 10; //change
}
}

applyFilterOnAll(event: Event) {
const filterValue = (event.target as HTMLInputElement).value;
this.dataSource.filter = filterValue.trim().toLowerCase();

if (this.dataSource.paginator) {
this.dataSource.paginator.firstPage();
}
}

applyFilter(filterBy?: any) {

switch (filterBy) {
case 'col2':
this.dataSource.filterPredicate = (data, filter) =>
data.col2.toLowerCase().includes(filter);
this.dataSource.filter = this.column2.toLowerCase();
break;

case 'col3':
this.dataSource.filterPredicate = (data, filter) =>
data.col3.toLowerCase().includes(filter);
this.dataSource.filter = this.column3.toLowerCase();
break;

case 'col4':
this.dataSource.filterPredicate = (data, filter) =>
data.col4.toLowerCase().includes(filter);
this.dataSource.filter = this.column4.toLowerCase();
break;

}
}

goToPage() {
this.paginator.pageIndex = this.pageNumber - 1;
this.paginator.page.next({
pageIndex: this.paginator.pageIndex,
pageSize: this.paginator.pageSize,
length: this.paginator.length
});
}
onOptionClick(option: string, row: UserData) {
console.log('Option clicked:', option, 'for row:', row);
}

getValueByKey(key: string){
  return this.maps.get(key);
}

getColumnKeys(): string[] {
  return this.column.map((column: any) => column.key);
}

getColumnHeader(key: string): string {
  const val = this.column.find((col:any) => col.key === key);
  return val ? val.header : '';
}

}
