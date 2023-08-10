import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/ApiCalls/apiCalls.service';
import { ColumnsName, Options, PageSizeOptions } from 'src/models/enums.model';
import { filterFields, UserData } from 'src/models/column-name.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'application';

  constructor(private _apiService: ApiService,){}

  transformedData:any;

  filterAllFlag!:true;

  option:any=['Clone','Edit','Delete'];   //change
  
  options=[Options.Clone,
           Options.Edit,
           Options.Delete];
           
  // displayedColumns= [Columns.Id,
  //   Columns.Name,
  //   Columns.Email,
  //   Columns.Gender];

  displayedColumnsName=[ColumnsName.col1,
  ColumnsName.col2,
  ColumnsName.col3,
  ColumnsName.col4,
  ColumnsName.col5];

  pageSizes=[PageSizeOptions.page1,
  PageSizeOptions.page2,
  PageSizeOptions.page3];


  tableColumns = [
    { key: 'col1', header: 'ID' },
    { key: 'col2', header: 'Name' },
    { key: 'col3', header: 'Email Id' },
    { key: 'col4', header: 'Gender' },
    { key: 'rowOptions', header: 'Options' }
  ];


  ngOnInit() {
      this._apiService.getData().subscribe(res=>{
        this.transformedData= this.transformApiResponse(res);
     })
    
  }

  transformApiResponse(data: UserData[]): any[] {
    return data.map(item => {
      return {
        col1: item.id,
        col2: item.name,
        col3: item.email,
        col4: item.gender,
        rowOptions: this.option,
      };
    });
  }
}





