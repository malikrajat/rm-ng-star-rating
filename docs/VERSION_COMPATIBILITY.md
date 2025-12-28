# Version Compatibility

This document describes the Angular, TypeScript, and platform compatibility for **`rm-ng-star-rating`**, along with versioning and upgrade expectations.

---

## Angular Compatibility

`rm-ng-star-rating` is built using **modern Angular APIs** and follows Angular’s official versioning and support guidelines.

| Library Version    | Supported Angular Versions | Standalone Components | Notes                   |
| ------------------ | -------------------------- | --------------------- | ----------------------- |
| `4.x.x`            | Angular **21**             | Yes                   | Full supported          |
| `3.x.x`            | Angular **20**             | Yes                   | Full supported          |
| `2.x.x`            | Angular **19**             | Yes                   | Full supported          |
| `1.x.x`            | Angular **18**             | Yes                   | Full supported          |

### Key Points

* Fully compatible with **standalone components**
* Does **not** require `NgModule`
* Safe to use with:

  * `ChangeDetectionStrategy.OnPush`
  * Zoneless Angular setups
  * SSR and hydration

---

## TypeScript Compatibility

The library is written in **strict TypeScript mode** and ships with full type definitions.

| Angular Version | Minimum TypeScript |
| --------------- | ------------------ |
| Angular 14      | 4.7                |
| Angular 15–16   | 4.8 – 5.0          |
| Angular 17–18   | 5.2+               |
| Angular 19      | 5.2+               |
| Angular 20      | 5.2+               |
| Angular 21      | 5.2+               |

> Ensure your project’s TypeScript version aligns with your Angular version for best results.

---

## Browser Compatibility

`rm-ng-star-rating` supports all modern evergreen browsers supported by Angular itself.

### Supported Browsers

* Chrome (latest)
* Edge (latest)
* Firefox (latest)
* Safari (latest)

### Not Supported

* Internet Explorer (IE11 and below)

---

## Dependency Compatibility

* **External Dependencies:** None
* **Peer Dependencies:**

  * `@angular/core`
  * `@angular/common`

No additional libraries, icon packs, or UI frameworks are required.

---

## Versioning Strategy

This library follows **Semantic Versioning (SemVer)**:

```
MAJOR.MINOR.PATCH
```

### Patch (`x.x.PATCH`)

* Bug fixes
* Internal refactoring
* Documentation updates
* No breaking changes

### Minor (`x.MINOR.x`)

* New features
* Optional inputs or outputs
* Backward-compatible improvements

### Major (`MAJOR.x.x`)

* Breaking API changes
* Angular version support changes
* Behavioral changes requiring migration

---

## Breaking Change Policy

Breaking changes are:

* Introduced **only in major versions**
* Clearly documented in:

  * Release notes
  * Migration guides
  * README updates

No silent or undocumented breaking changes are introduced.

---

## Upgrade Guidelines

### Upgrading Patch or Minor Versions

* No code changes required
* Safe to update directly

### Upgrading Major Versions

* Review the migration guide
* Verify Angular version compatibility
* Update inputs/outputs if required

---

## Recommended Setup

For best stability and performance:

* Use the **latest patch version** of your Angular major
* Enable `OnPush` change detection
* Use tree-shaking–friendly imports
* Avoid deep imports into internal files

---

## Support Policy

* Only Angular versions within **Angular’s official support window** are actively supported
* Older Angular versions may continue to work but are not guaranteed to receive fixes

---

## Summary

`rm-ng-star-rating` is designed to be:

* Forward-compatible with modern Angular versions
* Safe to upgrade within major versions
* Predictable in long-term enterprise projects

Always refer to the release notes before upgrading across major versions.
