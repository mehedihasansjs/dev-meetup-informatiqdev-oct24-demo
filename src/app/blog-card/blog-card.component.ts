import { NgOptimizedImage } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, input } from '@angular/core';
import { Blog } from '../blog';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
  ],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.css',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class BlogCardComponent {
  blog = input.required<Blog>();
}
