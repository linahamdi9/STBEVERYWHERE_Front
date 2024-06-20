import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MIEUXVOUSCONNAITREComponent } from './MIEUXVOUSCONNAITREComponent';

describe('MIEUXVOUSCONNAITREComponent', () => {
  let component: MIEUXVOUSCONNAITREComponent;
  let fixture: ComponentFixture<MIEUXVOUSCONNAITREComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MIEUXVOUSCONNAITREComponent]
    });
    fixture = TestBed.createComponent(MIEUXVOUSCONNAITREComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
