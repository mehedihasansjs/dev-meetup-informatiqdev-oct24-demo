import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clipboard',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './clipboard.component.html',
  styleUrl: './clipboard.component.scss'
})
export class ClipboardComponent {
  protected text: string = '';
  protected textFromClipboard: string = '';

  async copyText() {
    try {
      await navigator.clipboard.writeText(this.text);
      console.log(`Text :${this.text}: copied to clipboard`);
    } catch ( e ) {
      console.error('Error copying text', e);
    }
  }

  async copyImage(imageElement: HTMLImageElement) {
    try {
      const url = imageElement.src;
      const data = await fetch(url);
      const blob = await data.blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob
        })
      ]);
      console.log(`Image ${url} copied to clipboard`);
    } catch ( e ) {
      console.error('Error copying image', e);
    }
  }

  // previously, copied text was stored in the clipboard only accessible via the paste event
  async readText() {
    try {
      this.textFromClipboard = await navigator.clipboard.readText();
      console.log(`Text :${this.textFromClipboard}: read from clipboard`);
    } catch ( e ) {
      console.error('Error reading text', e);
    }
  }
}
