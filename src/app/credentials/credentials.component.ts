import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-credentials',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './credentials.component.html',
  styleUrl: './credentials.component.scss'
})
export class CredentialsComponent implements OnInit {
  protected username: string = '';
  protected password: string = '';

  private id = 'meetup-24';

  ngOnInit(): void {
    // Check if the browser supports the Credential Management API
    // @ts-ignore
    if (window.PasswordCredential || window.FederatedCredential) {
      console.log('Credential Management API supported');

      // Only works on secure contexts (HTTPS) and in a real domain
      navigator.credentials.get()
        .then((credential) => {
          if (credential) {
            console.log('Credential retrieved:', credential);
          } else {
            console.log('No credential found');
          }
        });
    }
  }

  async login() {
    // @ts-ignore
    const credential = new PasswordCredential({
      id: this.username,
      name: this.username,
      password: this.password,
      iconURL: 'https://localhost:4200/images.jpeg'
    });

    try {
      await navigator.credentials.store(credential);
    } catch (e) {
      console.error('Error storing credential', e);
    }
  }
}
