# CHANGELOG

All notable changes to **rm-ng-star-rating** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [4.0.0] - 2025-12-25 (Upcoming)

### Breaking Changes
- Dropped support for Angular versions below 21
- Minimum Angular version now 21.x
- Updated peer dependencies

### Added
- Full Angular 21 compatibility and support
- Enhanced TypeScript 5.x support
- Improved build optimization for Angular 21
- Better tree-shaking capabilities

### Changed
- Updated compilation target for Angular 21
- Refined component architecture for Angular 21 features
- Performance improvements with Angular 21 optimizations

### Fixed
- Compatibility issues with Angular 21 standalone components
- Type safety improvements with stricter TypeScript checks

---

## [3.2.0] - 2024-06-29

### Added
- Angular 20 compatibility and full support
- Enhanced standalone component architecture
- Improved performance with Angular 20 optimizations
- Better integration with Angular 20 signals (if applicable)

### Changed
- Updated peer dependencies to support Angular 20.x
- Refined component rendering for Angular 20
- Enhanced build configuration for Angular 20

### Fixed
- Compatibility issues with Angular 20
- Minor rendering bugs in Angular 20 environment

---

## [3.0.0] - 2024-XX-XX

### Breaking Changes
- Minimum Angular version is now 20.x
- Dropped support for Angular 18 and 19
- API changes for better consistency

### Added
- Full Angular 20 support
- Enhanced TypeScript definitions
- Improved component performance
- Better error handling and validation

### Changed
- Modernized component architecture
- Updated build process for Angular 20
- Refined component API for consistency
- Performance optimizations

### Deprecated
- Legacy API methods (to be removed in v4.0.0)

### Fixed
- Various bug fixes and stability improvements
- Edge cases in rating calculations
- TypeScript strict mode compatibility

---

## [2.0.0] - 2024-XX-XX

### Breaking Changes
- Minimum Angular version is now 19.x
- Removed Angular 18 support
- Updated component inputs/outputs naming for consistency

### Added
- Angular 19 compatibility
- Enhanced standalone component features
- Improved accessibility (ARIA labels)
- Better keyboard navigation support
- Enhanced documentation

### Changed
- Optimized component rendering
- Updated dependencies for Angular 19
- Refined component styling
- Improved TypeScript type safety

### Fixed
- Half-star rendering issues
- Mouse hover behavior improvements
- Touch event handling on mobile devices
- Z-index issues in complex layouts

---

## [1.0.3] - 2024-XX-XX

### Fixed
- Minor bug fixes and stability improvements
- Documentation updates
- Package metadata improvements

### Changed
- Improved npm package structure
- Enhanced README documentation

---

## [1.0.2] - 2024-XX-XX

### Fixed
- Build configuration improvements
- Package export fixes
- TypeScript declaration file corrections

### Changed
- Updated package.json metadata
- Minor documentation improvements

---

## [1.0.1] - 2024-XX-XX

### Fixed
- Initial bug fixes from v1.0.0
- Corrected npm package structure
- Fixed import paths

### Changed
- Enhanced error messages
- Improved component initialization

---

## [1.0.0] - 2024-XX-XX

### Added - Initial Release
- Full Angular 18 standalone component support
- Zero dependencies architecture
- Interactive star rating functionality
- Read-only display mode
- **Half-star rating support** via `[allowHalf]` property
- Customizable star count (1-10 stars)
- Customizable colors for filled and empty stars
- Configurable star size
- `(ratingUpdated)` event emitter
- Touch and mouse event support
- Mobile-responsive design
- Full TypeScript support with type definitions
- Comprehensive documentation
- Live StackBlitz demo
- MIT License

### Component API (v1.0.0)
- `[rating]` - Current rating value (0-5)
- `[starCount]` - Number of stars to display (default: 5)
- `[color]` - Color for filled stars (default: 'yellow')
- `[emptyColor]` - Color for empty stars (default: 'lightgray')
- `[size]` - Star size in pixels (default: '24px')
- `[readOnly]` - Disable user interaction (default: false)
- `[allowHalf]` - Enable half-star ratings (default: false)
- `(ratingUpdated)` - Event fired when rating changes

---

## Version Compatibility Matrix

| rm-ng-star-rating | Angular Version | TypeScript | Status |
|-------------------|----------------|------------|--------|
| 4.x.x | 21.x.x | 5.4+ | Future |
| 3.x.x | 20.x.x | 5.2+ | Current |
| 2.x.x | 19.x.x | 5.2+ | Supported |
| 1.x.x | 18.x.x | 5.0+ | Legacy |

---

## Migration Guides

### Migrating from v3.x to v4.x

**Prerequisites:**
- Upgrade your Angular application to version 21.x
- Update TypeScript to 5.4 or higher

**Steps:**
1. Update the package:
   ```bash
   npm install rm-ng-star-rating@4
   ```

2. No API changes required - v4 maintains backward compatibility with v3 API

3. Test your implementation thoroughly

### Migrating from v2.x to v3.x

**Prerequisites:**
- Upgrade your Angular application to version 20.x

**Steps:**
1. Update the package:
   ```bash
   npm install rm-ng-star-rating@3
   ```

2. Review any deprecated API warnings
3. Update component usage if needed
4. Run tests to ensure compatibility

### Migrating from v1.x to v2.x

**Prerequisites:**
- Upgrade your Angular application to version 19.x

**Breaking Changes:**
- Some input/output property names may have changed for consistency
- Review component API documentation

**Steps:**
1. Update the package:
   ```bash
   npm install rm-ng-star-rating@2
   ```

2. Update component imports (if using module-based approach)
3. Review and update property bindings
4. Test all rating implementations

---

## Deprecation Notices

### v3.x
- None currently

### v2.x
- Legacy module-based imports (use standalone components instead)

### v1.x
- Entire 1.x series is now in legacy support mode

---

## Roadmap

### Planned for v4.x
- Custom icon support (hearts, thumbs, emojis)
- Animation options for rating changes
- Hover tooltip support
- Rating distribution visualization
- Batch rating updates API

### Planned for v5.x
- Advanced theming system
- Rating history tracking
- Drag-to-rate gesture
- Custom rating scales (0-10, 0-100)
- Enhanced analytics integration

---

## Support Policy

- **Current Version (3.x)**: Full support with regular updates
- **Previous Version (2.x)**: Security fixes and critical bugs only
- **Legacy (1.x)**: No active support - upgrade recommended

---

## Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Links

- [GitHub Repository](https://github.com/malikrajat/rm-ng-star-rating)
- [npm Package](https://www.npmjs.com/package/rm-ng-star-rating)
- [Live Demo](https://stackblitz.com/edit/stackblitz-starters-vzwa4w)
- [Report Issues](https://github.com/malikrajat/rm-ng-star-rating/issues)
- [Request Features](https://github.com/malikrajat/rm-ng-star-rating/issues/new?template=feature_request.md)

---

**Maintained by [Rajat Malik](https://github.com/malikrajat)**

For questions or support, contact: [mr.rajatmalik@gmail.com](mailto:mr.rajatmalik@gmail.com)
