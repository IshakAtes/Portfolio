import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgClass, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  mouseOvered: boolean = false;
  
  constructor(private router: Router) { }

  openImprint() {
    this.router.navigateByUrl('/imprint');
  }

  openPolicy() {
    this.router.navigateByUrl('/policys');
  }

}
