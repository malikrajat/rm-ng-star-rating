import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RmNgStarRatingComponent } from 'rm-ng-star-rating';

@Component({
    selector: 'app-reactive-forms',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RmNgStarRatingComponent],
    template: `
    <div class="example-container">
      <h2>Reactive Forms Integration</h2>
      <p>Using the star rating inside an Angular FormGroup.</p>

      <form [formGroup]="reviewForm" (ngSubmit)="onSubmit()">
        <div class="form-field">
          <label>Your Name:</label>
          <input type="text" formControlName="userName">
        </div>

        <div class="form-field">
          <label>Rating:</label>
          <rm-ng-star-rating 
            [rating]="reviewForm.get('rating')?.value" 
            (ratingUpdated)="onRatingChange($event)">
          </rm-ng-star-rating>
          <div *ngIf="reviewForm.get('rating')?.invalid && reviewForm.get('rating')?.touched" class="error">
            Please provide a rating.
          </div>
        </div>

        <div class="form-field">
          <label>Comment:</label>
          <textarea formControlName="comment"></textarea>
        </div>

        <button type="submit" [disabled]="reviewForm.invalid">Submit Review</button>
      </form>

      <div *ngIf="submittedData" class="result">
        <h3>Form Submitted!</h3>
        <pre>{{ submittedData | json }}</pre>
      </div>
    </div>
  `,
    styles: [`
    .example-container { padding: 20px; max-width: 500px; }
    .form-field { margin-bottom: 20px; display: flex; flex-direction: column; gap: 5px; }
    .error { color: red; font-size: 0.8rem; }
    .result { margin-top: 30px; padding: 15px; background: #f9f9f9; border-radius: 4px; }
    button { padding: 10px 20px; cursor: pointer; }
    input, textarea { padding: 8px; border: 1px solid #ccc; border-radius: 4px; }
  `]
})
export class ReactiveFormsComponent {
    reviewForm: FormGroup;
    submittedData: any = null;

    constructor(private fb: FormBuilder) {
        this.reviewForm = this.fb.group({
            userName: ['', Validators.required],
            rating: [0, [Validators.required, Validators.min(1)]],
            comment: ['']
        });
    }

    onRatingChange(rating: number) {
        this.reviewForm.patchValue({ rating });
        this.reviewForm.get('rating')?.markAsTouched();
    }

    onSubmit() {
        if (this.reviewForm.valid) {
            this.submittedData = this.reviewForm.value;
        }
    }
}
