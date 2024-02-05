import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgClass, FormsModule, ReactiveFormsModule, NgIf, NgStyle,],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  myForm: FormGroup;
  textInput: string = '';
  minlength: number = 2;
  isButtonDisabled: boolean = true;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      nameInput: ['', [Validators.required, Validators.minLength(2)]],
      mailInput: ['', [Validators.required, Validators.email]],
      text: ['', [Validators.required, Validators.minLength(6)]],
      checkbox: [false, Validators.requiredTrue]
    });
  }

  isFormValid(): boolean {
    return this.myForm.valid;
  }

  onSubmit() {
    console.log('form works')
  }

}
