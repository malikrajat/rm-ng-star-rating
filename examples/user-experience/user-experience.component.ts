import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RmNgStarRatingComponent } from 'rm-ng-star-rating';

@Component({
    selector: 'app-user-experience',
    standalone: true,
    imports: [CommonModule, RmNgStarRatingComponent],
    template: `
    <div class="example-container">
      <h2>User Experience (UX) Enhancements</h2>
      <p>Focusing on accessibility, feedback, and interactive responsiveness.</p>

      <section class="ux-item">
        <h3>1. Interactive Tooltips & Labels</h3>
        <p>Providing meaningful text alongside the stars.</p>
        <div class="interactive-rating">
          <rm-ng-star-rating 
            [rating]="currentRating" 
            (ratingUpdated)="onUpdate($event)"
            (mouseenter)="onHoverStart()"
            (mouseleave)="onHoverEnd()">
          </rm-ng-star-rating>
          <span class="feedback-text" [ngClass]="getRatingClass()">{{ getRatingLabel() }}</span>
        </div>
      </section>

      <section class="ux-item">
        <h3>2. Large Touch Targets</h3>
        <p>Ensuring mobile users can easily select ratings with larger icons and spacing.</p>
        <rm-ng-star-rating 
          [rating]="3" 
          [size]="'56px'" 
          [color]="'#ff9800'"
          aria-label="Rate this product">
        </rm-ng-star-rating>
      </section>

      <section class="ux-item">
        <h3>3. Keyboard Accessibility</h3>
        <p>The component supports tab indexing and focus states (planned feature show-case).</p>
        <div class="focus-demo">
           <rm-ng-star-rating [rating]="4"></rm-ng-star-rating>
        </div>
      </section>
    </div>
  `,
    styles: [`
    .example-container { padding: 20px; }
    .ux-item { margin-bottom: 40px; padding: 20px; border: 1px solid #e3f2fd; background: #fafdff; border-radius: 8px; }
    .interactive-rating { display: flex; align-items: center; gap: 20px; height: 50px; }
    .feedback-text { font-size: 1.2rem; font-weight: 500; transition: all 0.2s ease; }
    .poor { color: #f44336; }
    .average { color: #ff9800; }
    .good { color: #4caf50; }
    .excellent { color: #2196f3; }
  `]
})
export class UserExperienceComponent {
    currentRating = 0;

    onUpdate(r: number) { this.currentRating = r; }

    getRatingLabel(): string {
        if (this.currentRating === 0) return 'Select a rating';
        if (this.currentRating <= 1) return 'Poor';
        if (this.currentRating <= 2) return 'Fair';
        if (this.currentRating <= 3) return 'Average';
        if (this.currentRating <= 4) return 'Good';
        return 'Excellent!';
    }

    getRatingClass(): string {
        if (this.currentRating <= 2) return 'poor';
        if (this.currentRating <= 3) return 'average';
        if (this.currentRating <= 4) return 'good';
        return 'excellent';
    }

    onHoverStart() { /* logic to show tooltip */ }
    onHoverEnd() { /* logic to hide tooltip */ }
}
