import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutresinformationsComponent } from './autresinformations.component';

describe('AutresinformationsComponent', () => {
  let component: AutresinformationsComponent;
  let fixture: ComponentFixture<AutresinformationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutresinformationsComponent]
    });
    fixture = TestBed.createComponent(AutresinformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
