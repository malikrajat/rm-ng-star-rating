import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RmNgStarRatingComponent } from 'rm-ng-star-rating';

interface Review {
    id: number;
    author: string;
    rating: number;
    date: string;
    comment: string;
}

@Component({
    selector: 'app-product-reviews',
    standalone: true,
    imports: [CommonModule, RmNgStarRatingComponent],
    template: `
    <div class="example-container">
      <h2>Product Customer Reviews</h2>
      <div class="review-summary">
        <div class="average">
          <span class="score">4.7</span>
          <rm-ng-star-rating [rating]="4.7" [size]="'30px'" [readOnly]="true"></rm-ng-star-rating>
          <span class="count">Based on 128 reviews</span>
        </div>
      </div>

      <div class="review-list">
        <div *ngFor="let review of reviews" class="review-card">
          <div class="review-header">
            <strong>{{ review.author }}</strong>
            <span class="date">{{ review.date }}</span>
          </div>
          <rm-ng-star-rating 
            [rating]="review.rating" 
            [size]="'20px'" 
            [readOnly]="true">
          </rm-ng-star-rating>
          <p class="comment">{{ review.comment }}</p>
        </div>
      </div>
    </div>
  `,
    styles: [`
    .example-container { padding: 20px; background: #fff; }
    .review-summary { margin-bottom: 40px; border-bottom: 2px solid #eee; padding-bottom: 20px; }
    .average { display: flex; flex-direction: column; align-items: center; gap: 5px; }
    .score { font-size: 3rem; font-weight: bold; }
    .count { color: #666; font-size: 0.9rem; }
    .review-card { border: 1px solid #eee; padding: 15px; margin-bottom: 15px; border-radius: 8px; }
    .review-header { display: flex; justify-content: space-between; margin-bottom: 5px; }
    .date { color: #888; font-size: 0.85rem; }
    .comment { margin-top: 10px; line-height: 1.5; color: #444; }
  `]
})
export class ProductReviewsComponent implements OnInit {
    reviews: Review[] = [
        { id: 1, author: 'Alice Johnson', rating: 5, date: '2023-10-15', comment: 'Absolutely love this! The quality is top-notch and it exceeded my expectations.' },
        { id: 2, author: 'Bob Smith', rating: 4.5, date: '2023-10-12', comment: 'Very good product. A small minor issue but the support was great.' },
        { id: 3, author: 'Charlie Brown', rating: 4, date: '2023-10-08', comment: 'Solid performance. Does exactly what it says on the tin.' }
    ];

    ngOnInit() { }
}
