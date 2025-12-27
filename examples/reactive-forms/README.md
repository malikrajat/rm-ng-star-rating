# Reactive Forms Integration

This example shows how to use the star rating component within an Angular Reactive Form.

## Highlights
- Connecting the component to `FormGroup`.
- Using `patchValue` to update form state when rating changes.
- Implementing form validation (preventing submission if no stars are selected).

```typescript
this.reviewForm = this.fb.group({
  rating: [0, [Validators.required, Validators.min(1)]]
});

onRatingChange(rating: number) {
  this.reviewForm.patchValue({ rating });
}
```
