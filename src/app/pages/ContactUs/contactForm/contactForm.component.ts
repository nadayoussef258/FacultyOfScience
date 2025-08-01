import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './contactForm.component.html',
  styleUrls: ['./contactForm.component.css']
})
export class ContactFormComponent {

 contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // Handle form submission here
      console.log('Form Data:', this.contactForm.value);
      
      this.messageService.add({
        severity: 'success',
        summary: 'تم الإرسال بنجاح',
        detail: 'شكراً لتواصلك معنا، سنقوم بالرد عليك في أقرب وقت'
      });
      
      this.contactForm.reset();
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'خطأ في البيانات',
        detail: 'يرجى التأكد من صحة جميع البيانات المدخلة'
      });
    }
  }

  // Getter methods for form validation
  get fullName() { return this.contactForm.get('fullName'); }
  get email() { return this.contactForm.get('email'); }
  get phone() { return this.contactForm.get('phone'); }
  get message() { return this.contactForm.get('message'); }
}

