import { Component, ElementRef, ViewChild } from '@angular/core';
import { CameraComponent } from '../helper/camera/camera.component';

@Component({
  selector: 'app-text-detection',
  standalone: true,
    imports: [
        CameraComponent,
    ],
  templateUrl: './text-detection.component.html',
  styleUrl: './text-detection.component.scss'
})
export class TextDetectionComponent {
  protected image!: string;
  protected values: string[] = [];

  @ViewChild('textEl') text!: ElementRef<HTMLImageElement>;

  async scan() {
    if (!this.text.nativeElement) {
      return;
    }

    this.values = [];

    // @ts-ignore
    const detector = new TextDetector();

    try {
      const imageElement = this.text.nativeElement;
      const texts = await detector.detect(imageElement);
      for (const text of texts) {
        console.log('Text detected:', text);
        this.values.push(text.rawValue);
      }
    } catch (e) {
      console.error('Text detection failed:', e);
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
