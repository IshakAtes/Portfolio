import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgClass, NgStyle, TranslateModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  isActive: boolean = false; // Eine Variable, um den Zustand der Klasse zu verfolgen

  toggleMenu() {
    this.isActive = !this.isActive; // Umkehrung des Zustands beim Klicken auf den Button
  }
}
