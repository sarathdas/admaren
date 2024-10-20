import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { StoryFormComponent } from './story-form/story-form.component';
import { StoryListComponent } from './story-list/story-list.component';
import { SprintFormComponent } from './sprint-form/sprint-form.component';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    StoryFormComponent,
    StoryListComponent,
    SprintFormComponent,
    NavComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Sprint Planner';
}
