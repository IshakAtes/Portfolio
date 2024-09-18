import { NgClass, NgIf, NgOptimizedImage, NgStyle } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgClass, FormsModule, ReactiveFormsModule, NgIf, NgStyle, TranslateModule, NgOptimizedImage],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  http = inject(HttpClient);
  myForm: FormGroup;
  minlength: number = 2;
  isButtonDisabled: boolean = true;
  mailSended: boolean = false;
  windowWith: number = window.innerWidth;

  ngOnInit() {
    this.windowWith = window.innerWidth;
  }

  constructor(private fb: FormBuilder, private router: Router) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      mail: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(6)]],
      checkbox: [false, Validators.requiredTrue]
    });
  }

  swipeUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  openPolicy() {
    this.router.navigateByUrl('/policys');
  }

  isFormValid(): boolean {
    return this.myForm.valid;
  }


  post = {
    endPoint: 'https://ishakates.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit() {
    if (this.myForm.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.myForm.value))
        .subscribe({
          next: (_response: any) => {
            this.myForm.reset();
          },
          error: (error: any) => {
            console.error(error);
          },
          complete: () => {
            console.info('send post complete');
            this.mailSended = true;
            setTimeout(() => {
              this.mailSended = false;
            }, 3000)
          }
        });
    }
  }

}
