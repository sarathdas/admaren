import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Story {
  id: number;
  description: string;
  points: number;
  selected: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  private stories: Story[] = [];
  private storiesSubject = new BehaviorSubject<Story[]>([]);
  private selectedStoriesSubject = new BehaviorSubject<Story[]>([]);

  constructor() {}

  getStories() {
    return this.storiesSubject.asObservable();
  }

  getSelectedStories() {
    return this.selectedStoriesSubject.asObservable();
  }

  addStory(description: string, points: number) {
    if (this.stories.some((story) => story.description === description)) {
      return false;
    }
    const newStory: Story = {
      id: this.stories.length + 1,
      description,
      points,
      selected: false,
    };
    this.stories.push(newStory);
    this.storiesSubject.next(this.stories);
    return true;
  }

  clearStories() {
    this.stories = [];
    this.storiesSubject.next(this.stories);
    this.selectedStoriesSubject.next([]);
  }

  clearSelectedStories() {
    this.stories.forEach((story) => (story.selected = false));
    this.storiesSubject.next(this.stories);
    this.selectedStoriesSubject.next([]);
  }

  autoSelectStories(targetPoints: number) {
    let selectedPoints = 0;
    const selectedStories: Story[] = [];

    this.stories.sort((a, b) => b.points - a.points);

    for (const story of this.stories) {
      if (selectedPoints + story.points <= targetPoints) {
        story.selected = true;
        selectedPoints += story.points;
        selectedStories.push(story);
      } else {
        story.selected = false;
      }
    }

    this.storiesSubject.next(this.stories);
    this.selectedStoriesSubject.next(selectedStories);
  }
}
