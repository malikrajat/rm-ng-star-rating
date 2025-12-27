# Usage Guide

This document demonstrates how to use **`rm-ng-star-rating`** in common real-world Angular scenarios, from basic setup to advanced configurations.

---

## Basic Usage

### 1. Import the Component

`rm-ng-star-rating` supports **standalone components**, so no `NgModule` setup is required.

```ts
import { Component } from '@angular/core';
import { RmNgStarRatingComponent } from 'rm-ng-star-rating';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [RmNgStarRatingComponent],
  template: `
    <rm-ng-star-rating [rating]="3.5"></rm-ng-star-rating>
  `
})
export class ExampleComponent {
  rating = 3.5;
}
```

---

## Configurable Inputs

### Rating Value

```html
<rm-ng-star-rating [rating]="4"></rm-ng-star-rating>
```

* Accepts whole, half, or decimal values
* Automatically clamps values within valid range

---

### Star Count

```html
<rm-ng-star-rating
  [rating]="3"
  [maxStars]="10">
</rm-ng-star-rating>
```

Use this when your rating scale is not limited to 5 stars.

---

### Read-Only Mode

```html
<rm-ng-star-rating
  [rating]="4.5"
  [readonly]="true">
</rm-ng-star-rating>
```

Ideal for:

* Analytics dashboards
* Review summaries
* Static content

---

## Interactive Ratings

### Two-Way Interaction (Output Event)

```html
<rm-ng-star-rating
  [rating]="rating"
  (ratingChange)="onRatingChange($event)">
</rm-ng-star-rating>
```

```ts
rating = 2;

onRatingChange(value: number) {
  this.rating = value;
}
```

---

## Forms Integration

### Template-Driven Forms

```html
<rm-ng-star-rating
  [(rating)]="model.rating">
</rm-ng-star-rating>
```

---

### Reactive Forms (Controlled)

```ts
rating = 3;

onRatingChange(value: number) {
  this.form.patchValue({ rating: value });
}
```

```html
<rm-ng-star-rating
  [rating]="form.value.rating"
  (ratingChange)="onRatingChange($event)">
</rm-ng-star-rating>
```

---

## Usage in Lists and Grids

### Using `*ngFor`

```html
<div *ngFor="let item of products">
  <h4>{{ item.name }}</h4>
  <rm-ng-star-rating
    [rating]="item.rating"
    [readonly]="true">
  </rm-ng-star-rating>
</div>
```

Designed to scale efficiently in:

* Tables
* Cards
* Dashboards

---

## Performance-Optimized Usage

### With `OnPush` Change Detection

```ts
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})
```

The component is fully compatible with:

* `OnPush`
* Zoneless Angular
* High-frequency rendering scenarios

---

## Styling and Customization

### Basic Styling

The component ships with **minimal default styles**.

Override via global or component-level CSS:

```css
rm-ng-star-rating {
  font-size: 20px;
}
```

---

### Theming

Because the library does not enforce a design system, it integrates cleanly with:

* Angular Material
* Tailwind CSS
* Bootstrap
* Custom design systems

---

## Accessibility Considerations

* Semantic markup
* Keyboard interaction support (planned enhancements)
* Read-only mode for non-interactive contexts

Accessibility improvements are part of the long-term roadmap.

---

## Common Use Cases

* Product reviews
* Service feedback
* Skill ratings
* Course evaluations
* Read-only analytics dashboards
* Survey forms

---

## Anti-Patterns to Avoid

* Do not mutate internal values directly
* Avoid deep imports into library internals
* Do not override internal classes unless necessary

---

## Best Practices

* Use `readonly` for display-only views
* Prefer `OnPush` in parent components
* Keep rating values normalized at the data layer
* Centralize styling via your design system

---

## Summary

`rm-ng-star-rating` is designed to be:

* Easy to integrate
* Flexible without complexity
* Safe for large-scale Angular applications

Use the simplest configuration that satisfies your use case, and scale up only when required.


