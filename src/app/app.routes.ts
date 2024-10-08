import { Routes } from '@angular/router';
import { links } from './links';

export const routes: Routes = links.map(link => ({
  path: link.url,
  title: link.name,
  component: link.component
}));
