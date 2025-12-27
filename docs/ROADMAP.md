# Roadmap

This roadmap outlines the planned evolution of **`rm-ng-star-rating`**, focusing on stability, accessibility, performance, and developer experience.
All timelines are indicative and may evolve based on community feedback and Angular ecosystem changes.

---

## Guiding Principles

* **Angular-first**: Align with Angular’s official APIs and long-term direction
* **Minimal by default**: Avoid feature bloat
* **Backward compatibility** wherever possible
* **Performance-aware** at scale
* **Enterprise-ready** design decisions

---

## Short-Term (v1.x)

### Stability & Polish

* Bug fixes and edge-case handling
* Improved input validation
* More predictable rounding behavior for decimal ratings

### Documentation Enhancements

* Expanded usage examples
* Angular 17+ control flow (`@for`, `@if`) examples
* Forms-focused documentation
* Better README structure and navigation

### Developer Experience

* Improved typing and API clarity
* Clearer error handling for invalid inputs
* StackBlitz example links

---

## Mid-Term (v1.x → v2.0)

### Accessibility Improvements

* Keyboard navigation support
* ARIA attributes for screen readers
* Focus management for interactive mode
* Read-only accessibility semantics

### Customization Enhancements

* Custom icon support (SVG / font-based)
* Configurable active, inactive, and hover states
* Optional animation hooks (non-opinionated)

### Performance & Architecture

* Further optimization for large lists
* Enhanced support for zoneless Angular
* Improved SSR and hydration handling

---

## Long-Term (v2.x and beyond)

### Advanced Features (Opt-In)

* Fractional precision configuration
* Touch gesture support (mobile-first)
* Rating presets and reusable configs

### Theming & Design Systems

* Better integration patterns for:

  * Angular Material
  * Tailwind CSS
  * Enterprise design systems
* CSS variables-based theming support

### Ecosystem Growth

* Migration guides for major versions
* Contribution guidelines refinement
* Community-driven feature requests

---

## What Will Not Be Added

To keep the library focused and lightweight, the following are intentionally **out of scope**:

* Heavy UI frameworks
* Opinionated styling systems
* Global state management
* Analytics or tracking logic

---

## Versioning & Breaking Changes

* Major features that introduce breaking changes will be released only in **major versions**
* Every major release will include:

  * Clear migration documentation
  * Explicit upgrade notes
  * Version compatibility updates

---

## Community Feedback

The roadmap is influenced by:

* Real-world production use cases
* Angular ecosystem evolution
* Community feedback and issue reports

Suggestions and contributions are always welcome.

---

## Summary

`rm-ng-star-rating` is intended to be:

* Stable for production use
* Predictable to upgrade
* Lightweight yet extensible
* Aligned with modern Angular standards

This roadmap reflects a commitment to long-term maintainability rather than short-term feature expansion.
