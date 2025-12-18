import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddCard } from './modal-add-card';

describe('ModalAddCard', () => {
  let component: ModalAddCard;
  let fixture: ComponentFixture<ModalAddCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalAddCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
