import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfoloi',
  standalone: true,
  imports: [NgIf,NgFor,NgClass],
  templateUrl: './portfoloi.component.html',
  styleUrl: './portfoloi.component.css'
})
export class PortfoloiComponent {
images = [
    '../../assets/images/poert1 (1).png',
    '../../assets/images/port2.png',
    '../../assets/images/port3.png',
    '../../assets/images/poert1 (1).png',
    '../../assets/images/port2.png',
    '../../assets/images/port3.png'
  ];

  isOverlayVisible = false;
  activeImageSrc = '';
  activeIndex: number | null = null;

  showCard(index: number) {
    this.activeImageSrc = this.images[index];
    this.isOverlayVisible = true;
    this.activeIndex = index;
  }

  hideCard() {
    this.isOverlayVisible = false;
    this.activeIndex = null;
  }
}
