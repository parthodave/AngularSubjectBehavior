// src/app/app.component.ts
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { SenderComponent } from './sender/sender.component';
import { ReceiverComponent } from './receiver/receiver.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SenderComponent, ReceiverComponent],
  template: `
    <h1>Angular Standalone Subject Demo</h1>
    <app-sender></app-sender>
    <app-receiver></app-receiver>
  `,
})
export class AppComponent {}

bootstrapApplication(AppComponent);
