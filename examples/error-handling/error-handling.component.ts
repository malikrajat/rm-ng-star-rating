import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RmNgStarRatingComponent } from 'rm-ng-star-rating';

@Component({
    selector: 'app-error-handling',
    standalone: true,
    imports: [CommonModule, RmNgStarRatingComponent],
    template: `
    <div class="example-container">
      <h2>Robust Error Handling</h2>
      <p>Dealing with invalid inputs and application-level errors.</p>

      <section class="demo">
        <h3>1. Input Validation (Out of Range)</h3>
        <p>Input is set to 15, while maxStars is 5. Component should clamp to 5.</p>
        <rm-ng-star-rating [rating]="15" [starCount]="5"></rm-ng-star-rating>
      </section>

      <section class="demo">
        <h3>2. Handling Incomplete Data</h3>
        <p>Simulating a scenario where rating data fails to load from a server.</p>
        <div *ngIf="errorMessage" class="error-banner">
          {{ errorMessage }}
          <button (click)="retryLoad()">Retry</button>
        </div>
        <rm-ng-star-rating [rating]="failedRating" [readOnly]="true"></rm-ng-star-rating>
      </section>

      <section class="demo">
        <h3>3. Preventing Invalid Interactions</h3>
        <p>Using <code>[readOnly]</code> based on user permissions.</p>
        <div class="permission-box">
          <label><input type="checkbox" [(ngModel)]="hasPermission"> Has Edit Permission</label>
        </div>
        <rm-ng-star-rating [rating]="userRating" [readOnly]="!hasPermission"></rm-ng-star-rating>
        <p *ngIf="!hasPermission" class="hint">Enable permission to change rating.</p>
      </section>
    </div>
  `,
    imports: [CommonModule, RmNgStarRatingComponent, FormsModule],
    styles: [`
    .example-container { padding: 20px; }
    .demo { margin-bottom: 40px; padding: 20px; border: 1px solid #fee; background: #fffafb; border-radius: 8px; }
    .error-banner { background: #ffeded; color: #d32f2f; padding: 10px; border-radius: 4px; margin-bottom: 15px; display: flex; justify-content: space-between; align-items: center; }
    .permission-box { margin-bottom: 10px; }
    .hint { font-size: 0.8rem; color: #666; font-style: italic; }
    button { padding: 4px 10px; cursor: pointer; }
  `]
})
export class ErrorHandlingComponent {
    errorMessage: string | null = "Failed to synchronize rating with server.";
    failedRating: number = 0;
    userRating: number = 3;
    hasPermission: boolean = false;

    retryLoad() {
        this.errorMessage = null;
        this.failedRating = 4.5; // Success simulation
    }
}

import { FormsModule } from '@angular/forms';
