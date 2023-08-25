import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-quot-data-table',
  template: `
    <lib-data-table [settingObject]="object" (outputEmitter)="handleEmitOut($event)"></lib-data-table>
  `,
  styles: [
  ]
})
export class QuotDataTableComponent{


  @Input() object:any;
  @Output() outEmit: EventEmitter<any> = new EventEmitter<string>();

  handleEmitOut(value: string) {
    this.outEmit.emit(value);
  }
  
}
