import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @Input() item: string | number = '';
  @Input() framework: string = '';
  @Input() imgUrl: string = '';
  @Input() content: string = '';

  constructor() {
    // console.log('item', this.item);
  }

}
