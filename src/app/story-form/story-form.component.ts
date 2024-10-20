import { Component } from '@angular/core';
import { StoryService } from '../story.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-story-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './story-form.component.html',
  styleUrl: './story-form.component.scss',
})
export class StoryFormComponent {
  description: string = '';
  points: number = 0;

  constructor(private storyService: StoryService) {}

  addStory() {
    if (this.storyService.addStory(this.description, this.points)) {
      this.description = '';
      this.points = 0;
    } else {
      alert('Story already exists!');
    }
  }
}
