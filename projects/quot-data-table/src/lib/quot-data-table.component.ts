import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-quot-data-table',
  template: `
    <lib-data-table [apiData]="data" [option]="enumOption" [column]="enumColumn" [columnNames]="enumColumnNames" [pageSizeOptions]="enumPageSizeOptions"></lib-data-table>
  `,
  styles: [
  ]
})
export class QuotDataTableComponent {

  @Input() data:any;
  @Input() enumOption:any;
  @Input() enumColumn:any;
  @Input() enumColumnNames:any;
  @Input() enumPageSizeOptions:any;
}
