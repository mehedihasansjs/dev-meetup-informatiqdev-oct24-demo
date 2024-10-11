import { JsonPipe } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { CameraComponent } from '../helper/camera/camera.component';

@Component({
  selector: 'app-barcode-reader',
  standalone: true,
  imports: [
    CameraComponent,
    JsonPipe,
  ],
  templateUrl: './barcode-reader.component.html',
  styleUrl: './barcode-reader.component.scss'
})
export class BarcodeReaderComponent {
  protected image!: string;
  protected values: string[] = [];

  @ViewChild('barcode') barcode!: ElementRef<HTMLImageElement>;

  async scan() {
    // @ts-ignore
    const barcodeDetector = new BarcodeDetector();

    try {
      const imageElement = this.barcode.nativeElement;
      const barcodes = await barcodeDetector.detect(imageElement);
      for (const barcode of barcodes) {
        console.log('Barcode detected:', barcode);
        this.values.push(barcode.rawValue);
      }
    } catch (e) {
      console.error('Barcode detection failed:', e);
    }
  }

  onImageSelect($event: Event) {
    const target = $event.target as HTMLInputElement;
    const files = target.files;
    if (files && files.length) {
      const file = files[0];
      this.image = URL.createObjectURL(file);
    }
  }

  onPictureTaken($event: Blob) {
    this.image = URL.createObjectURL($event);
  }
}
