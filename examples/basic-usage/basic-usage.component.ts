import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RmNgStarRatingComponent } from 'rm-ng-star-rating';

@Component({
    selector: 'app-basic-usage',
    standalone: true,
    imports: [CommonModule, RmNgStarRatingComponent],
    template: `
    <div class="example-container">
      <h2>Basic Star Rating Usage</h2>
      <p>A simple implementation with default settings.</p>
      
      <div class="rating-display">
        <rm-ng-star-rating 
          [rating]="rating" 
          (ratingUpdated)="onRatingUpdate($event)">
        </rm-ng-star-rating>
        <span class="rating-value">Current Rating: {{ rating }}</span>
      </div>

      <div class="controls">
        <button (click)="resetRating()">Reset</button>
        <button (click)="setRating(5)">Set to 5</button>
      </div>
    </div>
  `,
    styles: [`
    .example-container {
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
    }
    .rating-display {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 20px;
    }
    .rating-value {
      font-size: 1.2rem;
      font-weight: bold;
    }
    .controls {
      display: flex;
      gap: 10px;
    }
  `]
})
export class BasicUsageComponent {
    rating: number = 3.5;

    onRatingUpdate(newRating: number) {
        console.log('Rating updated to:', newRating);
        this.rating = newRating;
    }

    resetRating() {
        this.rating = 0;
    }

    setRating(value: number) {
        this.rating = value;
    }
}
