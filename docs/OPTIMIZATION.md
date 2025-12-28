# Performance Optimization

## Change Detection

```typescript
// Use OnPush change detection for better performance
@Component({
  selector: 'app-ratings-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div *ngFor="let item of items; trackBy: trackById">
      <rm-ng-star-rating
        [rating]="item.rating"
        [readonly]="true">
      </rm-ng-star-rating>
    </div>
  `
})
export class RatingsListComponent {
  trackById(index: number, item: any): number {
    return item.id;
  }
}
```

## Event Handling

```typescript
// Debounce rating changes for auto-save
private ratingChangeSubject = new Subject<number>();

ngOnInit() {
  this.ratingChangeSubject
    .pipe(debounceTime(500))
    .subscribe(rating => this.saveRating(rating));
}

onRatingChange(rating: number): void {
  this.ratingChangeSubject.next(rating);
}
```
