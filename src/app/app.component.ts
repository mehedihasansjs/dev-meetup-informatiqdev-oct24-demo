import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { links } from './links';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  protected links = links;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    // Check if the browser supports the File Handling API.
    // @ts-ignore
    if ('launchQueue' in window && 'files' in LaunchParams.prototype) {
      // @ts-ignore
      launchQueue.setConsumer((launchParams) => {
        // Nothing to do when the queue is empty.
        if (!launchParams.files.length) {
          return;
        }

        // @ts-ignore
        window.fileHandler = launchParams.files;
        this.router.navigate(['/file-handling']);
      });
    }
  }
}
