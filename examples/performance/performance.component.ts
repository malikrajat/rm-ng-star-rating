import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RmNgStarRatingComponent } from 'rm-ng-star-rating';

@Component({
    selector: 'app-performance',
    standalone: true,
    imports: [CommonModule, RmNgStarRatingComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <div class="example-container">
      <h2>Performance: Large Scale Rendering</h2>
      <p>Using <code>OnPush</code> change detection and optimizing for many instances.</p>

      <div class="stats">
        <span>Items: 100</span> | 
        <span>Change Detection: OnPush</span>
      </div>

      <div class="grid">
        <div *ngFor="let item of items; trackBy: trackByFn" class="item-card">
          <small>Review #{{ item.id }}</small>
          <rm-ng-star-rating 
            [rating]="item.rating" 
            [size]="'18px'" 
            [readOnly]="true">
          </rm-ng-star-rating>
        </div>
      </div>
    </div>
  `,
    styles: [`
    .example-container { padding: 20px; }
    .stats { margin-bottom: 20px; padding: 10px; background: #e8f5e9; color: #2e7d32; border-radius: 4px; font-weight: bold; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 10px; }
    .item-card { padding: 8px; border: 1px solid #eee; border-radius: 4px; display: flex; flex-direction: column; align-items: center; }
  `]
})
export class PerformanceComponent {
    items = Array.from({ length: 100 }, (_, i) => ({
        id: i + 1,
        rating: Math.random() * 5
    }));

    constructor(private cdr: ChangeDetectorRef) { }

    trackByFn(index: number, item: any) {
        return item.id;
    }
}
