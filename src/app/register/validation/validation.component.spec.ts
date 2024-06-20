import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VALIDATIONComponent } from './validation.component';

describe('VALIDATIONComponent', () => {
  let component: VALIDATIONComponent;
  let fixture: ComponentFixture<VALIDATIONComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VALIDATIONComponent]
    });
    fixture = TestBed.createComponent(VALIDATIONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
