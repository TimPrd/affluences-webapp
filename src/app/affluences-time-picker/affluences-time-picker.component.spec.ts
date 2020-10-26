import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffluencesTimepickerComponent } from './affluences-time-picker.component';

describe('AffluencesTimepickerComponent', () => {
  let component: AffluencesTimepickerComponent;
  let fixture: ComponentFixture<AffluencesTimepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffluencesTimepickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffluencesTimepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
