import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IDENTIFICATIONComponent } from './identification.component';

describe('IDENTIFICATIONComponent', () => {
  let component: IDENTIFICATIONComponent;
  let fixture: ComponentFixture<IDENTIFICATIONComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IDENTIFICATIONComponent]
    });
    fixture = TestBed.createComponent(IDENTIFICATIONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
