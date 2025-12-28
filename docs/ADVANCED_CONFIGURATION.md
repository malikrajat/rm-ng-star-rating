# Advanced Configuration

## Custom Colors and Theming

```typescript
// Create themed rating components
@Component({
  selector: 'app-themed-ratings',
  template: `
    <!-- Success theme -->
    <rm-ng-star-rating
      [rating]="4"
      [readonly]="true"
      [color]="'#4caf50'"
      [emptyColor]="'#c8e6c9'">
    </rm-ng-star-rating>

    <!-- Warning theme -->
    <rm-ng-star-rating
      [rating]="3"
      [readonly]="true"
      [color]="'#ff9800'"
      [emptyColor]="'#ffe0b2'">
    </rm-ng-star-rating>

    <!-- Danger theme -->
    <rm-ng-star-rating
      [rating]="2"
      [readonly]="true"
      [color]="'#f44336'"
      [emptyColor]="'#ffcdd2'">
    </rm-ng-star-rating>

    <!-- Custom brand colors -->
    <rm-ng-star-rating
      [rating]="5"
      [readonly]="true"
      [color]="'#6b46c1'"
      [emptyColor]="'#e9d8fd'">
    </rm-ng-star-rating>
  `
})
export class ThemedRatingsComponent {}
```
