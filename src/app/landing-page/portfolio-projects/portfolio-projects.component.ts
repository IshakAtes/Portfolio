import { Component } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { NgFor } from '@angular/common';
import { NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

// interface ProjectStructure {
//   id: number;
//   project: string | number;
//   lang: string;
//   description: string;
// }[]

@Component({
  selector: 'app-portfolio-projects',
  standalone: true,
  imports: [ProjectsComponent, NgFor, NgClass, TranslateModule],
  templateUrl: './portfolio-projects.component.html',
  styleUrl: './portfolio-projects.component.scss'
})
export class PortfolioProjectsComponent {

  allProjects: {
    id: number;
    img: string;
    project: string | number;
    lang: string;
    description: string;
    live: string;
    git: string;
  }[] = [{
      "id": 1,
      "img": "/assets/img/Join.png",
      "project": "Join",
      "lang": "HTML | CSS | Javascript",
      "description": "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      "live": "https://join.ishakates.com/",
      "git": "https://github.com/IshakAtes/Join.git",
    },
    {
      "id": 2,
      "img": "/assets/img/sharkie_mockup.png",
      "project": "Sharkie",
      "lang": "HTML | CSS | Javascript",
      "description": "A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.",
      "live": "https://sharkie.ishakates.com/",
      "git": "https://github.com/IshakAtes/sharkie.git",
    },
    {
      "id": 3,
      "img": "/assets/img/Pkedex.png",
      "project": "Pokedex",
      "lang": "HTML | CSS | Javascript | API",
      "description": "Based on the PokéAPI a simple library that provides and catalogues pokemon information.",
      "live": "https://pokedex.ishakates.com/",
      "git": "https://github.com/IshakAtes/Pokedex.git",
    },
  ];

  ngOnInit() {
  }

  constructor() {}
}
