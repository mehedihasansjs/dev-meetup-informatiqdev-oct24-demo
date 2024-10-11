import { Component, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-camera',
  standalone: true,
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements AfterViewInit {
  @Output() pictureTaken = new EventEmitter<Blob>();

  @ViewChild('video') videoElement!: ElementRef<HTMLVideoElement>;
  private stream!: MediaStream;

  ngAfterViewInit() {
    this.startCamera();
  }

  async startCamera() {
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ video: true });
      this.videoElement.nativeElement.srcObject = this.stream;
    } catch (err) {
      console.error('Error accessing camera: ', err);
    }
  }

  takePicture() {
    const video = this.videoElement.nativeElement;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');
    if (context) {
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      canvas.toBlob((blob) => {
        if (blob) {
          this.handleBlob(blob);
        }
      }, 'image/jpeg');
    }
  }

  handleBlob(blob: Blob) {
    // Handle the blob (e.g., upload it, display it, etc.)
    console.log('Picture taken: ', blob);
    this.pictureTaken.emit(blob);
  }
}
