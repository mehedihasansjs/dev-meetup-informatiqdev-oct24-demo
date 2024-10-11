import { BadgingComponent } from './badging/badging.component';
import { ClipboardComponent } from './clipboard/clipboard.component';
import { CredentialsComponent } from './credentials/credentials.component';
import { DeviceMemoryComponent } from './device-memory/device-memory.component';
import { FileHandlerComponent } from './file-handler/file-handler.component';
import { FileSystemAccessComponent } from './file-system-access/file-system-access.component';

export const links = [
  { name: 'Clipboard', url: 'clipboard', component: ClipboardComponent },
  { name: 'Badging', url: 'badging', component: BadgingComponent },
  { name: 'Credential Management', url: 'credential-management', component: CredentialsComponent },
  { name: 'Device Memory', url: 'device-memory', component: DeviceMemoryComponent },
  { name: 'File Handling', url: 'file-handling', component: FileHandlerComponent },
  { name: 'File System Access', url: 'file-system-access', component: FileSystemAccessComponent },
  { name: 'File System Observer', url: 'file-system-observer', component: ClipboardComponent },
  { name: 'Navigation Preload', url: 'navigation-preload', component: ClipboardComponent },
  { name: 'Origin Private File System', url: 'origin-private-file-system', component: ClipboardComponent },
  { name: 'Payment Request', url: 'payment-request', component: ClipboardComponent },
  { name: 'Periodic Background Sync', url: 'periodic-background-sync', component: ClipboardComponent },
  { name: 'Persistent Storage', url: 'persistent-storage', component: ClipboardComponent },
  { name: 'Push', url: 'push', component: ClipboardComponent },
  { name: 'Shape Detection (Barcodes)', url: 'shape-detection-barcodes', component: ClipboardComponent },
  { name: 'Shape Detection (Faces)', url: 'shape-detection-faces', component: ClipboardComponent },
  { name: 'Shape Detection (Texts)', url: 'shape-detection-texts', component: ClipboardComponent },
  { name: 'Bluetooth', url: 'bluetooth', component: ClipboardComponent }
];
