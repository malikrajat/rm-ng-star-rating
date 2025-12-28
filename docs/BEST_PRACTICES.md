# Best Practices

## Accessibility

```typescript
// Always provide context for screen readers
<div role="group" aria-label="Product rating">
  <rm-ng-star-rating
    [rating]="rating"
    (ratingChange)="onRatingChange($event)">
  </rm-ng-star-rating>
  <span class="sr-only">Current rating: {{ rating }} out of 5 stars</span>
</div>

// Use semantic HTML
<fieldset>
  <legend>Rate your experience</legend>
  <rm-ng-star-rating
    [rating]="rating"
    (ratingChange)="onRatingChange($event)">
  </rm-ng-star-rating>
</fieldset>
```

## User Experience

```typescript
// Provide immediate feedback
onRatingChange(rating: number): void {
  this.currentRating = rating;
  
  // Show confirmation message
  this.showToast(`Rating updated to ${rating} stars`);
  
  // Auto-save if appropriate
  if (this.autoSave) {
    this.saveRating(rating);
  }
}

// Show rating distribution for context
<div class="rating-context">
  <rm-ng-star-rating
    [rating]="averageRating"
    [readonly]="true"
    [allowHalf]="true">
  </rm-ng-star-rating>
  <span>{{ averageRating.toFixed(1) }} ({{ totalReviews }} reviews)</span>
</div>
```
