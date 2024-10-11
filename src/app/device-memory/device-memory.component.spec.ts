import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceMemoryComponent } from './device-memory.component';

describe('DeviceMemoryComponent', () => {
  let component: DeviceMemoryComponent;
  let fixture: ComponentFixture<DeviceMemoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeviceMemoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceMemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
