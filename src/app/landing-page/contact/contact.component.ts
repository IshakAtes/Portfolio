import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgClass, FormsModule, ReactiveFormsModule, NgIf, NgStyle,],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  nameInput: string = '';
  textInput: string = '';
  minlength: number = 2;
  isButtonDisabled: boolean = true;
  mailInput: string = '';
  pattern: string = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}";


  constructor() {
    setTimeout(()=> {
      console.log(this.mailInput);
    }, 4000);
    // if (this.nameInput.length >= 2) {
    //   console.log('input is Correct');
    // }
  }


}
