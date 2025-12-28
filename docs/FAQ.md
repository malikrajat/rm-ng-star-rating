# FAQ

**Q: Why choose rm-ng-star-rating over other star rating libraries?**

A: This library has zero dependencies, making it extremely lightweight. It's specifically built for Angular with standalone component architecture, proper TypeScript support, and works seamlessly on all platforms including mobile.

**Q: Can I use custom icons instead of stars?**

A: Custom icon support is planned for v2.x. Currently, the component uses star icons with customizable colors and sizes.

**Q: Does it work with Angular forms?**

A: Yes, the component works with both template-driven and reactive forms. Use the `ratingChange` event to sync with your form model.

**Q: Can I have different rating scales (like 1-10)?**

A: The current version supports 5-star ratings. Custom rating scales are on the roadmap for v3.0.

**Q: How do I make it accessible for screen readers?**

A: The component includes ARIA labels and keyboard navigation by default. Wrap it in semantic HTML with appropriate labels for enhanced accessibility.

**Q: Does it work on touch devices?**

A: Yes, the component is fully optimized for touch interactions on iOS, Android, and all modern mobile browsers.

**Q: Can I animate the rating changes?**

A: Built-in animation options are planned for v2.x. Currently, you can add CSS transitions to customize the appearance.

**Q: How do I prevent users from changing their rating?**

A: Use the `[readonly]="true"` property to display ratings without user interaction.

**Q: Can I show half-star ratings?**

A: Yes, set `[allowHalf]="true"` to enable half-star ratings (0.5, 1.5, 2.5, etc.).

**Q: Is there a maximum number of stars I can display?**

A: Use the `[totalStars]` property to set any number of stars, though 5 is the standard and recommended default.

**Q: Can I use this in commercial projects?**

A: Yes, the MIT license allows free use in both personal and commercial projects.

**Q: How do I handle rating submission to a backend?**

A: Listen to the `ratingChange` event and call your API service with the new rating value.
