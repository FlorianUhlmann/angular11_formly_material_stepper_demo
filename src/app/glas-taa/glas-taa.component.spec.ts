import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlasTaaComponent } from './glas-taa.component';

describe('GlasTaaComponent', () => {
  let component: GlasTaaComponent;
  let fixture: ComponentFixture<GlasTaaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlasTaaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlasTaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
