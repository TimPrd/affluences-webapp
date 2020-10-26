import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceAffluenceComponent } from './interface-affluence.component';

describe('InterfaceAffluenceComponent', () => {
  let component: InterfaceAffluenceComponent;
  let fixture: ComponentFixture<InterfaceAffluenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceAffluenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceAffluenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
