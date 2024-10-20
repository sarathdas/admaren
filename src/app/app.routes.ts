import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'story-form',
    loadComponent: () =>
      import('./story-form/story-form.component').then(
        (m) => m.StoryFormComponent
      ),
  },
  {
    path: 'story-list',
    loadComponent: () =>
      import('./story-list/story-list.component').then(
        (m) => m.StoryListComponent
      ),
  },
  {
    path: 'sprint-form',
    loadComponent: () =>
      import('./sprint-form/sprint-form.component').then(
        (m) => m.SprintFormComponent
      ),
  },
  { path: '', redirectTo: '/story-form', pathMatch: 'full' },
];
