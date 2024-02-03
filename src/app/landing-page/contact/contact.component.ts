import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgClass, FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  nameInput: string = '';
  minlength: number = 2;
  isButtonDisabled: boolean = true;

}
