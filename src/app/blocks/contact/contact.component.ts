import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm = {
    name: '',
    mail: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    console.log('Form Data:', this.contactForm);
    alert('Message Sent Successfully!');
  }
}
