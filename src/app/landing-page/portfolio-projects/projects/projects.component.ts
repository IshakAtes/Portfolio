import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @Input() item: string | number = '';
  @Input() framework: string = '';
  @Input() imgUrl: string = '';
  @Input() content: string = '';
  @Input() i: number = 0;

  constructor() {
    console.log(this.i);
  }

}
