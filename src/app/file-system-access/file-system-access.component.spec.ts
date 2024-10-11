import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileSystemAccessComponent } from './file-system-access.component';

describe('FileSystemAccessComponent', () => {
  let component: FileSystemAccessComponent;
  let fixture: ComponentFixture<FileSystemAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileSystemAccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileSystemAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
