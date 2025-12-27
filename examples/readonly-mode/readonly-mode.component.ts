import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RmNgStarRatingComponent } from 'rm-ng-star-rating';

@Component({
    selector: 'app-readonly-mode',
    standalone: true,
    imports: [CommonModule, RmNgStarRatingComponent],
    template: `
    <div class="example-container">
      <h2>Read-Only Display</h2>
      <p>Displaying static ratings where user interaction is disabled.</p>

      <div class="demo-grid">
        <div class="demo-item">
          <label>Movie Rating (4.2/5):</label>
          <rm-ng-star-rating [rating]="4.2" [readOnly]="true"></rm-ng-star-rating>
        </div>

        <div class="demo-item">
          <label>Expert Score (9.8/10):</label>
          <rm-ng-star-rating [rating]="9.8" [starCount]="10" [readOnly]="true" [color]="'#9b59b6'"></rm-ng-star-rating>
        </div>

        <div class="demo-item">
          <label>Disabled State (Greyed out):</label>
          <rm-ng-star-rating [rating]="3" [readOnly]="true" [color]="'#bdc3c7'"></rm-ng-star-rating>
        </div>
      </div>
    </div>
  `,
    styles: [`
    .example-container { padding: 20px; }
    .demo-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; }
    .demo-item { padding: 15px; border: 1px solid #efefef; border-radius: 4px; }
    label { display: block; margin-bottom: 10px; font-weight: 500; font-size: 0.9rem; color: #777; }
  `]
})
export class ReadOnlyModeComponent { }
