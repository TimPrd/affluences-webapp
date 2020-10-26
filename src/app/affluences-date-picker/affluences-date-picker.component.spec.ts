import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffluencesDatepickerComponent } from './affluences-date-picker.component';

describe('AffluencesDatepickerComponent', () => {
  let component: AffluencesDatepickerComponent;
  let fixture: ComponentFixture<AffluencesDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffluencesDatepickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffluencesDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
