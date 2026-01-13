import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, inject, Input, Output, ViewChild } from '@angular/core';

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
  
  #cdr = inject(ChangeDetectorRef);
  
  @ViewChild("inputText") public inputText!: ElementRef;

  @Output() public outputCardList = new EventEmitter<{
    id: string;
    checked: boolean;
    value: string;
  }>();

  public addCard(value: string) {
    if(value) {
      this.#cdr.detectChanges();
      this.inputText.nativeElement.value = '';

      const dataAtual = new Date();
      const timestamp = dataAtual.getTime();
      const id = `ID ${timestamp}`

      this.outputCardList.emit({
        id,
        checked: false,
        value
      })

      console.log({
        id,
        checked: false,
        value
      });
      
      
      return this.inputText.nativeElement.focus();
    }
  }
}
