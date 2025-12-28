# Troubleshooting

## Common Issues and Solutions

### Issue: Rating Not Updating

**Problem:** Rating value doesn't change when clicking stars.

**Solution:**

```typescript
// Ensure you're handling the ratingChange event
<rm-ng-star-rating
  [rating]="currentRating"
  (ratingChange)="currentRating = $event">
</rm-ng-star-rating>

// Or use two-way binding (if supported)
// Check component documentation for binding support
```

### Issue: Stars Not Displaying

**Problem:** Component renders but stars are not visible.

**Solution:**

```typescript
// 1. Ensure component is imported
import { RmNgStarRatingComponent } from 'rm-ng-star-rating';

@Component({
  standalone: true,
  imports: [RmNgStarRatingComponent], // Must be imported
  // ...
})

// 2. Check if CSS is loaded properly
// Add explicit size if stars are too small
<rm-ng-star-rating
  [rating]="4"
  [size]="24">
</rm-ng-star-rating>

// 3. Verify parent container has dimensions
.rating-container {
  min-height: 50px;
  display: block;
}
```

### Issue: Touch Events Not Working on Mobile

**Problem:** Cannot select rating on mobile devices.

**Solution:**

```typescript
// Ensure proper viewport meta tag in index.html
<meta name="viewport" content="width=device-width, initial-scale=1">

// Add touch-action CSS if needed
.rating-wrapper {
  touch-action: manipulation;
}

// Increase touch target size for better UX
<rm-ng-star-rating
  [rating]="rating"
  [size]="32"
  [spacing]="8">
</rm-ng-star-rating>
```

### Issue: Half Stars Not Showing

**Problem:** Half star ratings display as full stars.

**Solution:**

```typescript
// Enable half-star support explicitly
<rm-ng-star-rating
  [rating]="4.5"
  [allowHalf]="true"
  [readonly]="true">
</rm-ng-star-rating>

// Ensure rating value includes decimals
this.rating = 4.5; // Not 4 or 5
```

### Issue: Colors Not Applying

**Problem:** Custom colors don't show up.

**Solution:**

```typescript
// Use proper hex color format
<rm-ng-star-rating
  [rating]="4"
  [color]="'#ff6b6b'"      // Use quotes and # symbol
  [emptyColor]="'#e0e0e0'">
</rm-ng-star-rating>

// Named colors also work
<rm-ng-star-rating
  [rating]="4"
  [color]="'gold'"
  [emptyColor]="'lightgray'">
</rm-ng-star-rating>

// CSS variables
<rm-ng-star-rating
  [rating]="4"
  [color]="'var(--primary-color)'"
  [emptyColor]="'var(--gray-300)'">
</rm-ng-star-rating>
```

### Issue: TypeScript Errors

**Problem:** Getting type errors when using the component.

**Solution:**

```typescript
// Ensure proper typing
import { RmNgStarRatingComponent } from 'rm-ng-star-rating';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [RmNgStarRatingComponent],
  // ...
})
export class MyComponent {
  rating: number = 0; // Explicit type annotation
  
  onRatingChange(rating: number): void {
    this.rating = rating;
  }
}
```

### Issue: Read-Only Mode Not Working

**Problem:** Users can still change rating in read-only mode.

**Solution:**

```typescript
// Explicitly set readonly property
<rm-ng-star-rating
  [rating]="4"
  [readonly]="true">  // Must be boolean true, not string
</rm-ng-star-rating>

// Don't handle ratingChange in readonly mode
<rm-ng-star-rating
  [rating]="4"
  [readonly]="true">
  // No (ratingChange) handler needed
</rm-ng-star-rating>
```

