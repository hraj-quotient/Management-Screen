import { NgModule } from '@angular/core';
import { QuotDataTableComponent } from './quot-data-table.component';
import { DataTableComponent } from './data-table/data-table.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    QuotDataTableComponent,
    DataTableComponent
  ],
  imports: [
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule, 
    HttpClientModule,
    NgbDropdownModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,
    MatMenuModule,
  ],
  exports: [
    QuotDataTableComponent
  ]
})
export class QuotDataTableModule { }
