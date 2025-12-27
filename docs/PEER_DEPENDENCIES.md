# Peer Dependencies

This document explains the peer dependency strategy used by **`rm-ng-star-rating`**, including what is required, why it is required, and how it benefits consumers.

---

## What Are Peer Dependencies?

Peer dependencies indicate packages that **must be provided by the consuming application**, not bundled with the library itself.

For Angular libraries, this ensures:

* A single Angular runtime
* No version conflicts
* Predictable dependency resolution
* Smaller bundle sizes

---

## Declared Peer Dependencies

`rm-ng-star-rating` declares the following peer dependencies:

```json
{
  "@angular/core": ">=14.0.0",
  "@angular/common": ">=14.0.0"
}
```

### Why Only These?

* `@angular/core`
  Required for component lifecycle, change detection, and rendering.

* `@angular/common`
  Required for common Angular directives and platform abstractions.

No other Angular packages are required.

---

## What Is Intentionally Not a Peer Dependency

The library **does not** declare the following as peer dependencies:

* `@angular/forms`
* `@angular/router`
* UI frameworks (Material, Bootstrap, etc.)
* Icon libraries
* RxJS utilities beyond Angular’s default runtime

This keeps the library:

* Lightweight
* Flexible
* Framework-agnostic at the styling level

---

## Why Peer Dependencies Matter for Angular

Declaring Angular packages as peer dependencies ensures:

### 1. Single Angular Version at Runtime

Avoids issues caused by:

* Multiple Angular versions
* Duplicate injectors
* Change detection conflicts

---

### 2. Compatibility Across Angular Versions

Using a version range (`>=14.0.0`) allows:

* Forward compatibility
* Easier upgrades
* Alignment with Angular’s support window

---

### 3. Smaller Bundles

Angular core packages are:

* Shared at the application level
* Not bundled repeatedly
* Fully tree-shakable

---

## Installation Behavior

When installing the library:

```bash
npm install rm-ng-star-rating
```

* npm / pnpm / yarn will verify peer dependencies
* Warnings appear only if Angular is missing or incompatible
* No additional dependencies are auto-installed

---

## Handling Peer Dependency Warnings

If you see a warning:

* Ensure your Angular version satisfies the range
* Prefer upgrading Angular rather than forcing installs
* Avoid `--legacy-peer-deps` unless absolutely necessary

---

## Future Peer Dependency Changes

Peer dependency changes will occur **only in major versions** when:

* Dropping support for older Angular versions
* Adopting new Angular platform requirements

All such changes will be:

* Documented
* Versioned
* Accompanied by migration notes

---

## Best Practices for Consumers

* Keep Angular packages aligned to the same version
* Avoid deep imports from this library
* Rely only on the public API

---

## Summary

`rm-ng-star-rating` uses a **minimal peer dependency strategy** to ensure:

* Maximum compatibility
* Zero dependency bloat
* Predictable Angular behavior
* Safe long-term upgrades

This approach aligns with Angular’s official library authoring guidelines.
