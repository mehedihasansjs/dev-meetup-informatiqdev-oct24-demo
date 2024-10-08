import { NgClass, NgStyle } from '@angular/common';
import { Component, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClass, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  onDialogClose($event: Event) {
    console.log('Dialog closed with return value ->', ($event.target as HTMLDialogElement).returnValue );
  }
}
