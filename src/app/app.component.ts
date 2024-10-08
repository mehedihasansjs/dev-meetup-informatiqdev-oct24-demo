import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { faker } from '@faker-js/faker/locale/en';
import { Blog } from './blog';
import { BlogCardComponent } from './blog-card/blog-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BlogCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  protected blogs: Blog[] = [];

  ngOnInit() {
    for ( let i = 0; i < 100; i++) {
      this.blogs.push({
        id: faker.string.uuid(),
        image: faker.image.urlPicsumPhotos({
          height: 200,
          width: 300
        }),
        title: faker.lorem.sentence(6),
        description: faker.lorem.paragraph(4),
        views: faker.number.int({
          min: 100,
          max: 1000
        }),
        author: {
          name: faker.person.fullName(),
          avatar: faker.image.avatar()
        }
      });
    }
  }
}
