import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RmNgStarRatingComponent } from 'rm-ng-star-rating';

@Component({
    selector: 'app-conditional-rating',
    standalone: true,
    imports: [CommonModule, RmNgStarRatingComponent],
    template: `
    <div class="example-container">
      <h2>Conditional Rating Usage</h2>
      <p>Showing or hiding the rating component based on logic.</p>

      <div class="toggle-section">
        <button (click)="toggleReview()">{{ showReview ? 'Hide' : 'Show' }} Review System</button>
      </div>

      <div *ngIf="showReview" class="review-box" [@slideIn]>
        <h4>Rate your experience:</h4>
        <rm-ng-star-rating [rating]="0"></rm-ng-star-rating>
      </div>

      <div class="scenario">
        <h3>Conditional Display (Threshold)</h3>
        <p>Only show premium stars if rating is > 4.</p>
        <rm-ng-star-rating *ngIf="rating > 4" [rating]="rating" [color]="'gold'"></rm-ng-star-rating>
        <rm-ng-star-rating *ngIf="rating <= 4" [rating]="rating" [color]="'silver'"></rm-ng-star-rating>
      </div>
    </div>
  `,
    styles: [`
    .example-container { padding: 20px; }
    .toggle-section { margin-bottom: 20px; }
    .review-box { padding: 20px; border: 2px solid #e0e0e0; border-radius: 8px; background: #fafafa; }
    .scenario { margin-top: 40px; }
    button { padding: 10px 20px; cursor: pointer; }
  `]
})
export class ConditionalRatingComponent {
    showReview = false;
    rating = 4.5;

    toggleReview() {
        this.showReview = !this.showReview;
    }
}
