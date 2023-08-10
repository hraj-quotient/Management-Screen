import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {HttpClientModule} from '@angular/common/http';
import { ManagementHeaderComponent } from './management-header/management-header.component'
import { HamburgerSelectorComponent } from './management-header/hamburger-selector/hamburger-selector.component';
import { HelpCenterComponent } from './management-header/help-center/help-center.component';
import { UserMenuComponent } from './management-header/user-menu/user-menu.component';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelect } from '@angular/material/select';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CustomFilterPipe } from './custom-filter.pipe';
import {MatIconModule} from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import {QuotDataTableModule} from 'quot-data-table'
@NgModule({
  declarations: [
    AppComponent,
    //  ManagementComponentComponent,
     ManagementHeaderComponent,
     HamburgerSelectorComponent,
     HelpCenterComponent,
     UserMenuComponent,
     CustomFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    QuotDataTableModule
  ],
  exports: [MatSortModule],
  providers: [
    {
    provide: MatPaginatorIntl,
    // useClass: ManagementComponentComponent
    },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
