import { Component } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioProjectsComponent } from './portfolio-projects/portfolio-projects.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavBarComponent, HeaderComponent, AboutMeComponent, MySkillsComponent, PortfolioProjectsComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
