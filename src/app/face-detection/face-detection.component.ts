import { NgStyle } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { CameraComponent } from '../helper/camera/camera.component';

export enum LandmarkType {
  EYE = 'eye',
  NOSE = 'nose',
  MOUTH = 'mouth',
}

export interface Location {
  x: number;
  y: number;
}

export interface Landmark {
  type: LandmarkType;
  locations: Location[];
  color: string;
}

export interface Face {
  landmarks: Landmark[];
}

@Component({
  selector: 'app-face-detection',
  standalone: true,
  imports: [
    CameraComponent,
    NgStyle,
  ],
  templateUrl: './face-detection.component.html',
  styleUrl: './face-detection.component.scss'
})
export class FaceDetectionComponent {
  protected image!: string;
  private eyes: Landmark[] = [];
  private nose: Landmark[] = [];
  private mouth: Landmark[] = [];

  protected detectedFace!: Face | null;

  @ViewChild('face') face!: ElementRef<HTMLImageElement>;

  async scan() {
    this.detectedFace = null;
    this.eyes = [];
    this.nose = [];
    this.mouth = [];

    // @ts-ignore
    const barcodeDetector = new FaceDetector();

    try {
      const imageElement = this.face.nativeElement;
      const faces = await barcodeDetector.detect(imageElement);
      for (const face of faces) {
        console.log('Face detected:', face);
        const landmarks = face.landmarks;
        const eyes = landmarks.filter((landmark: any) => landmark.type === 'eye');
        const nose = landmarks.filter((landmark: any) => landmark.type === 'nose');
        const mouth = landmarks.filter((landmark: any) => landmark.type === 'mouth');
        this.eyes.push(...eyes);
        this.nose.push(...nose);
        this.mouth.push(...mouth);

        this.detectedFace = {
          // @ts-ignore
          landmarks: [
            this.eyes,
            this.nose,
            this.mouth
          ].map((landmarks, index) => ({
            type: index === 0 ? LandmarkType.EYE : index === 1 ? LandmarkType.NOSE : LandmarkType.MOUTH,
            locations: landmarks.map(landmark => landmark.locations),
            color: index === 0 ? 'red' : index === 1 ? 'green' : 'blue',
          })),
        };

        console.log('Face detected:', this.detectedFace);
      }
    } catch (e) {
      console.error('Face detection failed:', e);
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
