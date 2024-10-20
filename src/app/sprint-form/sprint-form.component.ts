import { Component } from '@angular/core';
import { Story, StoryService } from '../story.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sprint-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sprint-form.component.html',
  styleUrl: './sprint-form.component.scss',
})
export class SprintFormComponent {
  targetPoints: number = 0;

  constructor(private storyService: StoryService) {}

  autoSelectStories() {
    this.storyService.autoSelectStories(this.targetPoints);
    this.getDisplayStories();
  }

  clearStories() {
    this.storyService.clearStories();
  }

  clearSelectedStories() {
    this.storyService.clearSelectedStories();
  }

  getDisplayStories() {
    this.storyService.getSelectedStories().subscribe((stories) => {
      this.selectedStories = stories;
    });
  }

  selectedStories: Story[] = [];

  ngOnInit() {}
}
