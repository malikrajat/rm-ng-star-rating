# Performance Optimization

Best practices for using `rm-ng-star-rating` in high-performance applications.

## Key Techniques
- **ChangeDetectionStrategy.OnPush**: Use this in parent components to reduce unnecessary re-renders.
- **TrackBy**: Always use `trackBy` in `*ngFor` loops when rendering lists of ratings.
- **Lightweight Footprint**: The component itself is dependency-free and small, ensuring fast initial load.

```typescript
@Component({
  // ...
  changeDetection: ChangeDetectionStrategy.OnPush
})
```
