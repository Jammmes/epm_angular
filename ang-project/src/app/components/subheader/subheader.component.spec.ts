import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubheaderComponent } from './subheader.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SubheaderComponent', () => {
  let component: SubheaderComponent;
  let fixture: ComponentFixture<SubheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubheaderComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
