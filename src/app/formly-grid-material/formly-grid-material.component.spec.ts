import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyGridMaterialComponent } from './formly-grid-material.component';

describe('FormlyGridMaterialComponent', () => {
  let component: FormlyGridMaterialComponent;
  let fixture: ComponentFixture<FormlyGridMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormlyGridMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyGridMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
