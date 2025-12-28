# Basic Usage Example

This example demonstrates the simplest way to integrate `rm-ng-star-rating` into your Angular application.

## Key Features Shown
- Basic input binding for `[rating]`.
- Handling output events with `(ratingUpdated)`.
- Programmatic updates to the rating value.

## Implementation Details

```typescript
import { RmNgStarRatingComponent } from 'rm-ng-star-rating';

@Component({
  // ...
  imports: [RmNgStarRatingComponent],
  template: `
    <rm-ng-star-rating 
      [rating]="rating" 
      (ratingUpdated)="onRatingUpdate($event)">
    </rm-ng-star-rating>
  `
})
export class YourComponent {
  rating = 3.5;
  onRatingUpdate(val: number) { this.rating = val; }
}
```
