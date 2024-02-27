import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  title = 'Your Receipt';
  constructor(private titleService: Title) {
    this.titleService.setTitle($localize `${this.title}`);
    console.log($localize, `${this.title}`);
  }

  isActive: boolean = false; // Eine Variable, um den Zustand der Klasse zu verfolgen

  switchLanguage(lang: string) {
    // Setze den Titel entsprechend der ausgewählten Sprache
    switch (lang) {
      case 'en-US':
        this.titleService.setTitle('English Title');
        break;
      case 'de-DE':
        this.titleService.setTitle('German Title');
        break;
      // Weitere Sprachen hier hinzufügen...
      default:
        this.titleService.setTitle('Default Title');
    }
    console.log(lang, this.titleService.getTitle());
  }

  toggleMenu() {
    this.isActive = !this.isActive; // Umkehrung des Zustands beim Klicken auf den Button
  }
}
