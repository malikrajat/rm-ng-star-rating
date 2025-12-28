# Custom Styling Example

Demonstrates how to customize the visual appearance of the star rating component.

## Available Style Inputs
- `[size]`: CSS size string (e.g., '24px', '3rem').
- `[color]`: Active star color (hex, rgb, or named).
- `[emptyColor]`: Inactive star color.
- `[starCount]`: Total number of stars to display.

## Quick Styles

```html
<rm-ng-star-rating 
  [rating]="7.5" 
  [starCount]="10" 
  [size]="'60px'" 
  [color]="'#e74c3c'">
</rm-ng-star-rating>
```
