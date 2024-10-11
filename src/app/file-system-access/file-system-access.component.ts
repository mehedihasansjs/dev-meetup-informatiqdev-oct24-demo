/**
 * Learn more: https://developer.chrome.com/docs/capabilities/web-apis/file-system-access
 */

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-system-access',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './file-system-access.component.html',
  styleUrl: './file-system-access.component.scss'
})
export class FileSystemAccessComponent {
  protected text = '';
  private fileHandle: any;

  constructor(private router: Router) {}

  async openImageFilePicker() {
    // Request a file handle
    // @ts-ignore
    const fileHandle = await window.showOpenFilePicker({
      types: [
        {
          description: 'Image related files',
          accept: {
            'image/*': ['.jpg', '.jpeg', '.png', '.gif', '.svg']
          }
        }
      ]
    });

    // @ts-ignore
    window.fileHandler = fileHandle;
    this.router.navigate(['/file-handling']);
  }

  async openTextFilePicker() {
    // Request a file handle
    // @ts-ignore
    const [fileHandle] = await window.showOpenFilePicker({
      types: [
        {
          description: 'Text files',
          accept: {
            'text/plain': ['.txt']
          }
        }
      ]
    });

    this.fileHandle = fileHandle;
    const file = await fileHandle.getFile();
    const contents = await file.text();
    this.text = contents;
  }

  async save() {
    const writable = await this.fileHandle.createWritable();
    await writable.write(this.text);
    await writable.close();
  }

  async createNewFile() {
    // @ts-ignore
    const handle = await window.showSaveFilePicker({
      types: [
        {
          description: 'Text files',
          accept: {
            'text/plain': ['.txt']
          }
        }
      ]
    });
    return handle;
  }
}
