import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburgerSelectorComponent } from './hamburger-selector.component';
import { EnviromentService } from '../../Service/util-service/enviroment.service';

describe('HamburgerSelectorComponent', () => {
  let component: HamburgerSelectorComponent;
  let fixture: ComponentFixture<HamburgerSelectorComponent>;
  let envService:EnviromentService;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HamburgerSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    envService = TestBed.get(EnviromentService);
    envService.init();
    fixture = TestBed.createComponent(HamburgerSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
