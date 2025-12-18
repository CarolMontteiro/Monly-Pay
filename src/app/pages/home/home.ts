import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
//component
import { ModalAddCard } from './modal-add-card/modal-add-card';

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

}
