// src/app/receiver/receiver.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-receiver',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>Received message: {{ message }}</p>
  `,
})
export class ReceiverComponent implements OnInit {
  message: string = '';

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messageService.message$.subscribe((msg) => {
      debugger;
      this.message = msg;
    });
  }
}
