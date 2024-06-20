import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixagenceComponent } from './choixagence.component';

describe('ChoixagenceComponent', () => {
  let component: ChoixagenceComponent;
  let fixture: ComponentFixture<ChoixagenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoixagenceComponent]
    });
    fixture = TestBed.createComponent(ChoixagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
