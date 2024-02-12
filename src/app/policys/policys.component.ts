import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-policys',
  standalone: true,
  imports: [],
  templateUrl: './policys.component.html',
  styleUrl: './policys.component.scss'
})
export class PolicysComponent {
  constructor(private router: Router) { }

  redirectToHome() {
    this.router.navigateByUrl('**');
  }
}
