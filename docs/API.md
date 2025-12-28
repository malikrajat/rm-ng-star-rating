# API Reference

## RmNgStarRatingComponent

The main component for displaying and collecting star ratings.

### Input Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `rating` | `number` | `0` | Current rating value (0-5) |
| `readonly` | `boolean` | `false` | If true, disables user interaction |
| `size` | `number` | `24` | Size of stars in pixels |
| `color` | `string` | `'#ffc107'` | Color of filled stars |
| `emptyColor` | `string` | `'#e0e0e0'` | Color of empty stars |
| `spacing` | `number` | `4` | Spacing between stars in pixels |
| `allowHalf` | `boolean` | `false` | Allow half-star ratings |
| `totalStars` | `number` | `5` | Total number of stars to display |
| `showLabel` | `boolean` | `false` | Show numeric label next to stars |
| `labelText` | `string` | `''` | Custom label text template |

### Output Events

| Event | Type | Description |
|-------|------|-------------|
| `ratingChange` | `EventEmitter<number>` | Emitted when rating changes |
| `hover` | `EventEmitter<number>` | Emitted when hovering over stars |

### Methods

| Method | Parameters | Returns | Description |
|--------|------------|---------|-------------|
| `setRating()` | `rating: number` | `void` | Programmatically set rating |
| `reset()` | none | `void` | Reset rating to 0 |

### Examples

**Basic Usage:**

```typescript
<rm-ng-star-rating
  [rating]="3.5"
  (ratingChange)="onRatingChange($event)">
</rm-ng-star-rating>
```

**Customized Appearance:**

```typescript
<rm-ng-star-rating
  [rating]="4"
  [size]="32"
  [color]="'#ff5722'"
  [emptyColor]="'#cfd8dc'"
  [spacing]="8"
  (ratingChange)="onRatingChange($event)">
</rm-ng-star-rating>
```

**Read-Only with Half Stars:**

```typescript
<rm-ng-star-rating
  [rating]="4.5"
  [readonly]="true"
  [allowHalf]="true"
  [showLabel]="true">
</rm-ng-star-rating>
```
