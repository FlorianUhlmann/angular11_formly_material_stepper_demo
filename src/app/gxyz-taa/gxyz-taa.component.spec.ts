import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GxyzTaaComponent } from './gxyz-taa.component';

describe('GxyzTaaComponent', () => {
  let component: GxyzTaaComponent;
  let fixture: ComponentFixture<GxyzTaaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GxyzTaaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GxyzTaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
