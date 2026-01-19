import { CommonModule, JsonPipe, NgOptimizedImage } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
//component
import { ModalAddCard } from './modal-add-card/modal-add-card';
import { ICardItem } from './interface/ICardItem.interface';

@Component({
  selector: 'app-home',
  imports: [
    NgOptimizedImage, 
    FormsModule, 
    CommonModule, 
    ModalAddCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  newNameList = '';
  showModal = false;

  openModal() {
    this.newNameList = '';
    this.showModal = true; 
  }

  closeModal() {
    this.showModal = false;
  }

  #setCarsItems = signal<ICardItem[]>(this.#parseItems());
  public cards = this.#setCarsItems.asReadonly();

  #parseItems(): ICardItem[] {
    return JSON.parse(localStorage.getItem('@my-card') || '[]');
  }

  public getInputAndAddCard(value: ICardItem) {
    this.#setCarsItems.update(items => {
      const updated = [...items, value];
      localStorage.setItem('@my-card', JSON.stringify(updated));
      return updated;
    });
  }
}
