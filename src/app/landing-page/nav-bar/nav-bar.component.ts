import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  constructor() {}

  isActive: boolean = false; // Eine Variable, um den Zustand der Klasse zu verfolgen

  toggleMenu() {
    this.isActive = !this.isActive; // Umkehrung des Zustands beim Klicken auf den Button
  }
}
