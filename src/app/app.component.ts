import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/ApiCalls/apiCalls.service';
import {LibSettings} from 'src/models/enums.model';
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
  recievedOptionData:any;
  settings: LibSettings=new LibSettings();
  columnFilterSetting=[true,true,true,false];
  filterAllSetting=false;
  optionSetting=['Clone','Edit','Delete'];  
  pageSizesSetting=[10,20,50];
  tableColumnSetting = [
    { key: 'col1', header: 'ID' },
    { key: 'col2', header: 'Name' },
    { key: 'col3', header: 'Email Id' },
    { key: 'col4', header: 'Gender' },
    // { key: 'col5', header: 'activeStatus' },
    { key: 'rowOptions', header: null },
  ];
  sortSetting={
    id: 'col2',
    start:'asc',
    disableClear: true
  }

  ngOnInit() {
      this._apiService.getData().subscribe(res=>{
        this.transformedData= this.transformApiResponse(res);
        this.settings.data=this.transformedData;
     })

          this.settings.columnFilter = this.columnFilterSetting;
          this.settings.option = this.optionSetting;
          this.settings.pageSizes = this.pageSizesSetting;
          this.settings.sort = this.sortSetting;
          this.settings.tableColumn=this.tableColumnSetting;


    
  }

  transformApiResponse(data: UserData[]): any[] {
    return data.map(item => {
      return {
        col1: item.id,
        col2: item.name,
        col3: item.email,
        col4: item.gender,
        rowOptions: this.optionSetting,
        // col5: item.active
      };
    });
  }

  handleObject(value: any) {
    this.recievedOptionData=value;
    // if(value.option=='Delete'){
    //   for(let i=0;i<this.transformedData.length;i++){
    //     if(this.transformedData[i].col1== value.row.col1){
    //       this.transformedData[i].col2="Update";
    //     }
    //   }

    // }
    console.log(value);
  }



  


 
}





