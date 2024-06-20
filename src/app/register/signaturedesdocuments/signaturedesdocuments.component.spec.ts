import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignaturedesdocumentsComponent } from './signaturedesdocuments.component';

describe('SignaturedesdocumentsComponent', () => {
  let component: SignaturedesdocumentsComponent;
  let fixture: ComponentFixture<SignaturedesdocumentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignaturedesdocumentsComponent]
    });
    fixture = TestBed.createComponent(SignaturedesdocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
