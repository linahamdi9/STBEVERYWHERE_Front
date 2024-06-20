import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieceidentiteComponent } from './pieceidentite.component';

describe('PieceidentiteComponent', () => {
  let component: PieceidentiteComponent;
  let fixture: ComponentFixture<PieceidentiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PieceidentiteComponent]
    });
    fixture = TestBed.createComponent(PieceidentiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
