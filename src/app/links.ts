import { BadgingComponent } from './badging/badging.component';
import { BarcodeReaderComponent } from './barcode-reader/barcode-reader.component';
import { ClipboardComponent } from './clipboard/clipboard.component';
import { CredentialsComponent } from './credentials/credentials.component';
import { DeviceMemoryComponent } from './device-memory/device-memory.component';
import { FaceDetectionComponent } from './face-detection/face-detection.component';
import { FileHandlerComponent } from './file-handler/file-handler.component';
import { FileSystemAccessComponent } from './file-system-access/file-system-access.component';
import { TextDetectionComponent } from './text-detection/text-detection.component';

export const links = [
  { name: 'Clipboard', url: 'clipboard', component: ClipboardComponent },
  { name: 'Badging', url: 'badging', component: BadgingComponent },
  { name: 'Credential Management', url: 'credential-management', component: CredentialsComponent },
  { name: 'Device Memory', url: 'device-memory', component: DeviceMemoryComponent },
  { name: 'File Handling', url: 'file-handling', component: FileHandlerComponent },
  { name: 'File System Access', url: 'file-system-access', component: FileSystemAccessComponent },
  { name: 'Shape Detection (Barcodes)', url: 'shape-detection-barcodes', component: BarcodeReaderComponent },
  { name: 'Shape Detection (Faces)', url: 'shape-detection-faces', component: FaceDetectionComponent },
  { name: 'Shape Detection (Texts)', url: 'shape-detection-texts', component: TextDetectionComponent },
];
