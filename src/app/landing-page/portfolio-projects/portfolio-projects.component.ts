import { Component } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { NgFor } from '@angular/common';

// interface ProjectStructure {
//   id: number;
//   project: string | number;
//   lang: string;
//   description: string;
// }[]

@Component({
  selector: 'app-portfolio-projects',
  standalone: true,
  imports: [ProjectsComponent, NgFor],
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
  }[] = [{
      "id": 1,
      "img": "/assets/img/Join.png",
      "project": "Join",
      "lang": "HTML | CSS | Javascript",
      "description": "lorem Ipsum"
    },
    {
      "id": 2,
      "img": "/assets/img/sharkie_mockup.png",
      "project": "Sharkie",
      "lang": "HTML | CSS | Javascript",
      "description": "A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale."
    },
    {
      "id": 2,
      "img": "/assets/img/sharkie_mockup.png",
      "project": "Sharkie",
      "lang": "HTML | CSS | Javascript",
      "description": "lorem Ipsum"
    },
  ];
  

  ngOnInit() {
  }

  constructor() {
    console.log('project', this.allProjects[0]['project']);
  }
}
