# Error Handling Example

How to build a resilient UI around the star rating component.

## Strategies
1. **Input Clamping**: The component automatically handles out-of-range values.
2. **Service Errors**: Using conditional rendering (`*ngIf`) to show error banners when data fails to sync.
3. **Permission Control**: Dynamically switching to `[readOnly]` mode based on user roles or application state.
