import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyGridComponent } from './formly-grid.component';

describe('FormlyGridComponent', () => {
  let component: FormlyGridComponent;
  let fixture: ComponentFixture<FormlyGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormlyGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
