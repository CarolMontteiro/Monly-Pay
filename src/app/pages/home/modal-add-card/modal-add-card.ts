import { CommonModule } from '@angular/common';
import { Component, ElementRef, input, output, viewChild,} from '@angular/core';
import { ICardItem } from '../interface/ICardItem.interface';

@Component({
  selector: 'app-modal-add-card',
  imports: [CommonModule],
  templateUrl: './modal-add-card.html',
  styleUrl: './modal-add-card.css',
})
export class ModalAddCard {
  show = input<boolean>(false);
  close = output<void>();

  closeModal() {
    this.close.emit();
  }
  
  public inputText = viewChild<ElementRef<HTMLInputElement>>("inputText");

  public inputListCard = input.required<ICardItem[]>();

  public outputAddCardList = output<ICardItem>();
  public addCard(value: string) {
    if(!value.trim()) return; {
     
      const currentDate = new Date();
      const timestamp = currentDate.getTime();
      const id = `ID ${timestamp}`

      this.outputAddCardList.emit({
        id,
        checked: false,
        value
      })
      
      this.close.emit();
    }
  }
}
