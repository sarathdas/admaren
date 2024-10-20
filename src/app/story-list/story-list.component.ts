import { Component, OnInit } from '@angular/core';
import { Story, StoryService } from '../story.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-story-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './story-list.component.html',
  styleUrl: './story-list.component.scss',
})
export class StoryListComponent implements OnInit {
  stories: Story[] = [];

  constructor(private storyService: StoryService) {}

  ngOnInit() {
    this.storyService.getStories().subscribe((stories) => {
      this.stories = stories;
    });
  }
}
