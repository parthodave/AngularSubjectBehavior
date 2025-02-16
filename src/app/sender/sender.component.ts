// src/app/sender/sender.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-sender',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <input [(ngModel)]="message" placeholder="Enter message">
    <button (click)="send()">Send</button>
  `,
})
export class SenderComponent {
  message: string = '';

  constructor(private messageService: MessageService) {}

  send() {
    this.messageService.sendMessage(this.message);
  }
}
