import { DecimalPipe, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-handler',
  standalone: true,
  imports: [
    JsonPipe,
    DecimalPipe,
  ],
  templateUrl: './file-handler.component.html',
  styleUrl: './file-handler.component.scss'
})
export class FileHandlerComponent implements OnInit {
  // see app component for the file handler logic

  protected urls: string[] = [];
  protected files: File[] = [];

  ngOnInit() {
    // @ts-ignore
    const fileHandlers = window.fileHandler;

    if ( !fileHandlers ) {
      return;
    }

    fileHandlers.forEach(async (fileHandler: any) => {
      const file = await fileHandler.getFile();
      this.files.push(file);
      this.urls.push(URL.createObjectURL(file));
      console.log(file);
    });
  }
}
