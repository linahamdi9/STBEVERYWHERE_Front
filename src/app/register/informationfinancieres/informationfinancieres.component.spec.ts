import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationfinancieresComponent } from './informationfinancieres.component';

describe('InformationfinancieresComponent', () => {
  let component: InformationfinancieresComponent;
  let fixture: ComponentFixture<InformationfinancieresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformationfinancieresComponent]
    });
    fixture = TestBed.createComponent(InformationfinancieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
