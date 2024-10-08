import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badging',
  standalone: true,
  imports: [],
  templateUrl: './badging.component.html',
  styleUrl: './badging.component.scss'
})
export class BadgingComponent implements OnInit {
  ngOnInit(): void {
    if (navigator?.setAppBadge) {
      navigator
        .setAppBadge(42)
        .then(() => console.log('setAppBadge success'));
    } else {
      console.error('setAppBadge not supported');
    }
  }
}
