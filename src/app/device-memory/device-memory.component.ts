import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-device-memory',
  standalone: true,
  imports: [
    JsonPipe,
  ],
  templateUrl: './device-memory.component.html',
  styleUrl: './device-memory.component.scss'
})
export class DeviceMemoryComponent {
  /**
   * The device memory in gigabytes.
   *
   * The value is a number representing the device's memory capacity in gigabytes.
   * It can be used to determine the amount of memory available on the device.
   *
   * Main purpose of this feature to allow developers to optimize their applications based on the device's memory capacity.
   *
   * Like, if the device has a low memory capacity, the developer can optimize the application to use less memory.
   *
   * Google used this feature to optimize the search results page for devices with low memory capacity.
   * Google attached a header called `Device-Memory` to the HTTP request to the server.
   * The server then used this header to send a lighter version of the search results page to the device with low memory capacity.
   * They call it `Search Lite`.
   *
   * For security reasons, the value of this property is not accurate.
   * The value is rounded to the nearest power of 2.
   * Starts with 0.25 and goes up with the power of 2.
   * And, it does not emit the full memory capacity of the device too.
   * The value is not accurate because it can be used to fingerprint the device.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Navigator/deviceMemory
   */
  // @ts-ignore
  protected RAM = navigator.deviceMemory;
}
