import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotDataTableComponent } from './quot-data-table.component';

describe('QuotDataTableComponent', () => {
  let component: QuotDataTableComponent;
  let fixture: ComponentFixture<QuotDataTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuotDataTableComponent]
    });
    fixture = TestBed.createComponent(QuotDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
