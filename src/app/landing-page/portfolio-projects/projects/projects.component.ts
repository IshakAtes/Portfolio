import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgStyle, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @Input() item: string | number = '';
  @Input() framework: string = '';
  @Input() imgUrl: string = '';
  @Input() content: string = '';
  @Input() liveTest: string = '';
  @Input() gitLink: string = '';
  @Input() i: number = 0;

  constructor() {
  }

}
