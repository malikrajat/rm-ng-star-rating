
# Project Structure

This document describes the structure of the **`rm-ng-star-rating`** library and the purpose of each major file and directory.

The structure is intentionally minimal to ensure:

* Easy navigation
* Clear public API boundaries
* Long-term maintainability
* Predictable builds and tree-shaking

---

## Root Structure

```text
rm-ng-star-rating/
├── src/
│   ├── lib/
│   │   ├── rm-ng-star-rating.component.ts
│   │   ├── rm-ng-star-rating.component.html
│   │   ├── rm-ng-star-rating.component.scss
│   │   └── types.ts
│   └── public-api.ts
├── docs/
│   ├── WHYTHISLIBRARY.md
│   ├── USAGES.md
│   ├── VERSIONCOMPATIBILITY.md
│   ├── ROADMAP.md
│   └── PROJECTSTRUCTURE.md
├── package.json
├── README.md
└── LICENSE
```

---

## `src/`

Contains the actual library source code.

### `src/lib/`

This folder holds all internal implementation details.

#### `rm-ng-star-rating.component.ts`

* Core standalone Angular component
* Handles:

  * Rating calculation
  * User interaction
  * Read-only logic
* Uses Angular best practices:

  * Strong typing
  * Minimal internal state
  * Predictable change detection

---

#### `rm-ng-star-rating.component.html`

* Template for rendering star icons
* Designed for:

  * Accessibility
  * Performance
  * Easy theming
* No framework-specific markup assumptions

---

#### `rm-ng-star-rating.component.scss`

* Minimal default styling
* No enforced design system
* Safe to override via:

  * Global styles
  * Component-level styles
  * CSS variables (future-ready)

---

#### `types.ts`

* Centralized type definitions
* Ensures:

  * Clean public API contracts
  * Reusable interfaces
  * Strong IDE support

---

### `src/public-api.ts`

Defines the **only supported public surface** of the library.

* Re-exports:

  * Component
  * Public types
* Prevents consumers from:

  * Importing internal files
  * Depending on unstable internals

This file is critical for:

* Tree-shaking
* Backward compatibility
* Clean versioning

---

## `docs/`

Contains developer-facing documentation, separate from source code.

### Purpose

* Keeps README concise
* Allows deep dives without clutter
* Scales as the library evolves

### Current Documents

* `WHYTHISLIBRARY.md` – Design rationale and motivation
* `USAGES.md` – Real-world usage examples
* `VERSIONCOMPATIBILITY.md` – Angular and browser support
* `ROADMAP.md` – Planned features and direction
* `PROJECTSTRUCTURE.md` – This document

---

## `package.json`

Defines:

* Package metadata
* Entry points
* Peer dependencies
* Angular compatibility signals

Key characteristics:

* No unnecessary dependencies
* Clean peer dependency declaration
* SemVer-aligned versioning

---

## `README.md`

Acts as the **entry point** for users:

* High-level overview
* Installation steps
* Quick-start example
* Links to detailed docs

---

## `LICENSE`

* MIT license
* Permissive for:

  * Commercial use
  * Enterprise adoption
  * Open-source contribution

---

## Design Decisions

### Why This Structure?

* **Flat and predictable**
* **Low cognitive load**
* **Easy to audit**
* **Safe for long-term maintenance**

### What Is Intentionally Missing?

* No deep nested folders
* No hidden internal exports
* No build-time magic
* No runtime configuration files

---

## Best Practices for Contributors

* Do not add new public exports without updating `public-api.ts`
* Keep components standalone
* Avoid introducing external dependencies
* Update documentation with every feature addition

---

## Summary

The `rm-ng-star-rating` project structure is designed to:

* Be easy to understand at first glance
* Scale without becoming complex
* Protect consumers from breaking changes
* Support modern Angular workflows

This structure reflects a **library-first mindset**, not an application mindset.
