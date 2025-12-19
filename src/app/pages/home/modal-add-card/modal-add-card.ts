import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-add-card',
  imports: [CommonModule],
  templateUrl: './modal-add-card.html',
  styleUrl: './modal-add-card.css',
})
export class ModalAddCard {

  @Input() show!: boolean;
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
  
}
