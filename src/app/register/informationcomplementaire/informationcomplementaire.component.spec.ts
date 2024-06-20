import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationcomplementaireComponent } from './informationcomplementaire.component';

describe('InformationcomplementaireComponent', () => {
  let component: InformationcomplementaireComponent;
  let fixture: ComponentFixture<InformationcomplementaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformationcomplementaireComponent]
    });
    fixture = TestBed.createComponent(InformationcomplementaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
