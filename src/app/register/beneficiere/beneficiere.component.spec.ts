import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiereComponent } from './beneficiere.component';

describe('BeneficiereComponent', () => {
  let component: BeneficiereComponent;
  let fixture: ComponentFixture<BeneficiereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeneficiereComponent]
    });
    fixture = TestBed.createComponent(BeneficiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
