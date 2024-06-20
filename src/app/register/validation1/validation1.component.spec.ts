import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VALIDATION1Component } from './validation1.component';

describe('Validation1Component', () => {
  let component: VALIDATION1Component;
  let fixture: ComponentFixture<VALIDATION1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VALIDATION1Component]
    });
    fixture = TestBed.createComponent(VALIDATION1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
