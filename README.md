# rm-ng-star-rating

<p align="left">
<img src="https://img.shields.io/npm/v/rm-ng-star-rating.svg" alt="npm version">
<img src="https://img.shields.io/badge/Stability-production--ready-success" alt="Production ready">
<img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="license">
<img src="https://img.shields.io/badge/Angular-14%20to%2021-blue" alt="Angular support range">
<img src="https://img.shields.io/badge/Ivy-compatible-success" alt="Ivy compatible">
<img src="https://img.shields.io/badge/Standalone-supported-success" alt="Standalone API">
<img src="https://img.shields.io/badge/AOT-compatible-success" alt="AOT compatible">
<img src="https://img.shields.io/badge/SSR-compatible-success" alt="SSR compatible">
<img src="https://img.shields.io/badge/TypeScript-strict-success" alt="Strict TS">
<img src="https://img.shields.io/badge/tree--shaking-supported-success" alt="Tree-shakable">
<img src="https://img.shields.io/badge/Side%20Effects-none-success" alt="No side effects">
<img src="https://img.shields.io/badge/Linting-enabled-success" alt="Linting">
<img src="https://img.shields.io/badge/Tests-covered-success" alt="Tests">
<img src="https://img.shields.io/badge/Coverage-90%25-success" alt="Coverage">
<img src="https://img.shields.io/badge/A11y-WCAG%202.1-success" alt="Accessibility compliant">
<img src="https://img.shields.io/badge/API-documented-blue" alt="API docs">
<img src="https://img.shields.io/badge/Examples-available-success" alt="Examples">
<img src="https://img.shields.io/bundlephobia/minzip/rm-ng-star-rating" alt="minzipped size">
<img src="https://img.shields.io/badge/Dependencies-none-success" alt="No dependencies">
<img src="https://img.shields.io/npm/dw/rm-ng-star-rating" alt="weekly downloads">
<img src="https://img.shields.io/npm/dt/rm-ng-star-rating" alt="total downloads">
<img src="https://img.shields.io/npm/last-update/rm-ng-star-rating" alt="Last update">
<img src="https://img.shields.io/badge/Maintained-yes-success" alt="Maintained">
<img src="https://img.shields.io/badge/SemVer-compliant-blue" alt="SemVer">
</p>

## See It In Action

<div align="center">

  <img src="https://github.com/malikrajat/rm-ng-star-rating/blob/main/assets/star.gif" alt="rm-ng-star-rating Demo" width="800"/>

  <p><em>Interactive star rating with customizable colors and sizes (Full/Half) Star!</em></p>

</div>

---

`rm-ng-star-rating` is a lightweight, highly customizable Angular star rating component with zero dependencies. Built for modern Angular applications with full TypeScript support, standalone component architecture, and optimized for performance.


---

## Table of Contents

- [Why This Library](./docs/WHY_THIS_LIBRARY.md)
- [Installation](./docs/INSTALLATION.md)
- [Quick Start / Usage](./docs/USAGE.md)
- [API Reference](./docs/API.md)
- [Advanced Configuration](./docs/ADVANCED_CONFIGURATION.md)
- [Peer Dependencies](./docs/PEER_DEPENDENCIES.md)
- [Best Practices](./docs/BEST_PRACTICES.md)
- [Performance Optimization](./docs/OPTIMIZATION.md)
- [Browser Support](./docs/BROWSER_SUPPORT.md)
- [Versioning & Angular Compatibility](./docs/VERSION_COMPATIBILITY.md)
- [Breaking Changes](./docs/BREAKING_CHANGES.md)
- [FAQ](./docs/FAQ.md)
- [Troubleshooting](./docs/TROUBLESHOOTING.md)
- [Project Structure](./docs/PROJECT_STRUCTURE.md)
- [Contributing Guidelines](./docs/CONTRIBUTING.md)
- [Roadmap](./docs/ROADMAP.md)
- [Changelog](./CHANGELOG.md)
- [License](./LICENSE.md)
- [Examples](./examples/README.md)
- [Usage Examples](./docs/USAGE.md)


## Quick Start

### Installation

```bash
npm install rm-ng-star-rating
```

### Basic Usage


```ts
import { Component } from '@angular/core';
import { RmNgStarRatingComponent } from 'rm-ng-star-rating';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [RmNgStarRatingComponent],
  template: `
    <rm-ng-star-rating [rating]="3.5"></rm-ng-star-rating>
  `
})
export class ExampleComponent {
  rating = 3.5;
}

```

See [Usage Guide](docs/usage.md) for more examples.



## Features

- **Zero Dependencies** - Absolutely no external dependencies
- **Standalone Component** - Modern Angular standalone architecture
- **Highly Customizable** - Configure colors, sizes, spacing, and behavior
- **Interactive & Read-Only Modes** - Perfect for both user input and display-only scenarios
- **Half-Star Support** - Precise ratings with half-star increments
- **Keyboard Accessible** - Full keyboard navigation support
- **Type-Safe** - Full TypeScript support
- **Mobile-Ready** - Touch-optimized for all devices

## Live Examples

Explore our comprehensive examples to see the library in action:

- [**Basic Usage**](./examples/basic-usage/README.md) - Simple star rating implementation
- [**Custom Styling**](./examples/custom-styling/README.md) - Colors, sizes, and star counts customization
- [**Reactive Forms**](./examples/reactive-forms/README.md) - Angular Reactive Forms integration
- [**Product Reviews**](./examples/product-reviews/README.md) - Realistic customer reviews list
- [**Read-Only Mode**](./examples/readonly-mode/README.md) - Static display scoring
- [**Performance Optimization**](./examples/performance/README.md) - OnPush and large list optimization
- [**UX & Accessibility**](./examples/user-experience/README.md) - Interactive feedback and accessibility

[**View All Examples →**](./examples/README.md)


## Live Demo & Playground

#### Try it yourself! Interactive demos available now:

<div align="center">

<table>
  <tr>
    <td align="center" width="50%">
      <a href="https://stackblitz.com/edit/stackblitz-starters-vzwa4w" target="_blank">
        <img src="https://img.shields.io/badge/StackBlitz_Demo-1976D2?style=for-the-badge&logo=stackblitz&logoColor=white" alt="StackBlitz Demo"/>
      </a>
      <br/><br/>
      <sub><b>Interactive Playground</b></sub><br/>
      <sub>Try all features live in your browser</sub>
    </td>
    <td align="center" width="50%">
      <a href="https://github.com/malikrajat/rm-ng-star-rating/tree/main/examples" target="_blank">
        <img src="https://img.shields.io/badge/Code_Examples-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Examples"/>
      </a>
      <br/><br/>
      <sub><b>Complete Examples</b></sub><br/>
      <sub>Copy-paste ready code samples</sub>
    </td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <a href="https://www.npmjs.com/package/rm-ng-star-rating" target="_blank">
        <img src="https://img.shields.io/badge/npm_Package-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm Package"/>
      </a>
      <br/><br/>
      <sub><b>npm Registry</b></sub><br/>
      <sub>Install and view package details</sub>
    </td>
    <td align="center" width="50%">
      <a href="https://github.com/malikrajat/rm-ng-star-rating" target="_blank">
        <img src="https://img.shields.io/badge/GitHub_Repo-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repository"/>
      </a>
      <br/><br/>
      <sub><b>Source Code</b></sub><br/>
      <sub>Star, fork, and contribute</sub>
    </td>
  </tr>
</table>

</div>


## Installation & Setup

For detailed installation instructions, see our [Installation Guide](./docs/INSTALLATION.md).

## Usage

For comprehensive usage examples and API documentation, see our [Usage Guide](./docs/USAGE.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## Support This Project

If **rm-ng-star-rating** has helped you build better Angular applications, please consider:

### Star This Repository

A star helps other developers discover this library!

[![GitHub stars](https://img.shields.io/github/stars/malikrajat/rm-ng-star-rating?style=social)](https://github.com/malikrajat/rm-ng-star-rating/stargazers)

### Why Your Star Matters

- Increases visibility in the Angular community
- Supports ongoing development and maintenance
- Encourages more open-source contributions
- Helps other developers find quality tools

## Statistics

[![npm downloads](https://img.shields.io/npm/dt/rm-ng-star-rating.svg)](https://www.npmjs.com/package/rm-ng-star-rating)
[![npm version](https://img.shields.io/npm/v/rm-ng-star-rating.svg)](https://www.npmjs.com/package/rm-ng-star-rating)
[![GitHub issues](https://img.shields.io/github/issues/malikrajat/rm-ng-star-rating.svg)](https://github.com/malikrajat/rm-ng-star-rating/issues)
[![GitHub stars](https://img.shields.io/github/stars/malikrajat/rm-ng-star-rating.svg?style=social)](https://github.com/malikrajat/rm-ng-star-rating/stargazers)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/malikrajat/rm-ng-star-rating/blob/main/LICENSE)

## Acknowledgements

This library wouldn't be possible without:

- **[Angular Team](https://angular.io/)** - Amazing framework and ecosystem
- **Community Contributors** - Thank you for feedback and improvements
- **Open Source Community** - For inspiration and best practices

Special thanks to everyone who has starred, used, or contributed to this project!



## Support and Community

### Getting Help

Need assistance? We're here to help!

| Support Channel | Link | Best For |
|----------------|------|----------|
| Bug Reports | [Report Bug](https://github.com/malikrajat/rm-ng-star-rating/issues/new?template=bug_report.md) | Technical issues |
| Feature Requests | [Request Feature](https://github.com/malikrajat/rm-ng-star-rating/issues/new?template=feature_request.md) | New features |
| Discussions | [Join Discussion](https://github.com/malikrajat/rm-ng-star-rating/discussions) | General questions |
| Email | [mr.rajatmalik@gmail.com](mailto:mr.rajatmalik@gmail.com?subject=rm-ng-star-rating%20Support) | Direct support |

### Documentation

- [GitHub Repository](https://github.com/malikrajat/rm-ng-star-rating)
- [npm Package](https://www.npmjs.com/package/rm-ng-star-rating)
- [Live Demo](https://stackblitz.com/edit/stackblitz-starters-gryqaz)
- [Changelog](https://github.com/malikrajat/rm-ng-star-rating/blob/main/CHANGELOG.md)

### Community

- Star the repository to show support
- Watch for updates and new releases
- Share your use cases and feedback
- Contribute code or documentation

### Stay Updated

- Follow the project on [GitHub](https://github.com/malikrajat/rm-ng-star-rating)
- Star the repository for updates
- Watch for new releases


## Other Libraries

### UI Components

| Library                | Description                                                              | npm Link                                                                                                        |
| ---------------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| **rm-range-slider**    | Lightweight two-thumb range slider with tooltips and color customization | [![npm](https://img.shields.io/npm/v/rm-range-slider.svg)](https://www.npmjs.com/package/rm-range-slider)       |
| **rm-ng-range-slider** | Angular-specific version of the dual range slider                        | [![npm](https://img.shields.io/npm/v/rm-ng-range-slider.svg)](https://www.npmjs.com/package/rm-ng-range-slider) |
| **rm-carousel**        | Simple, responsive carousel component                                    | [![npm](https://img.shields.io/npm/v/rm-carousel.svg)](https://www.npmjs.com/package/rm-carousel)               |
| **rm-image-slider**    | Minimal image slider with smooth transitions                             | [![npm](https://img.shields.io/npm/v/rm-image-slider.svg)](https://www.npmjs.com/package/rm-image-slider)       |
| **rm-ng-star-rating**  | Configurable Angular star rating component with readonly mode            | [![npm](https://img.shields.io/npm/v/rm-ng-star-rating.svg)](https://www.npmjs.com/package/rm-ng-star-rating)   |


### PDF & Export Libraries

| Library                                | Description                                                  | npm Link                                                                                                                                        |
| -------------------------------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **rm-ng-export-to-csv**                | Export JSON data to CSV with zero dependencies               | [![npm](https://img.shields.io/npm/v/rm-ng-export-to-csv.svg)](https://www.npmjs.com/package/rm-ng-export-to-csv)                               |
| **@codewithrajat/rm-ng-pdf-export**    | Image-based PDF export tool for Angular applications         | [![npm](https://img.shields.io/npm/v/@codewithrajat/rm-ng-pdf-export.svg)](https://www.npmjs.com/package/@codewithrajat/rm-ng-pdf-export)       |
| **@codewithrajat/rm-ng-structure-pdf** | Generate structured PDFs for reports, invoices, or documents | [![npm](https://img.shields.io/npm/v/@codewithrajat/rm-ng-structure-pdf.svg)](https://www.npmjs.com/package/@codewithrajat/rm-ng-structure-pdf) |


### Utility Libraries

| Library                        | Description                                             | npm Link                                                                                                                        |
| ------------------------------ | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **rm-ng-device-detection**     | Detect device type, OS, and browser in Angular          | [![npm](https://img.shields.io/npm/v/rm-ng-device-detection.svg)](https://www.npmjs.com/package/rm-ng-device-detection)         |
| **rm-colorful-console-logger** | Stylish multi-color console logger for better debugging | [![npm](https://img.shields.io/npm/v/rm-colorful-console-logger.svg)](https://www.npmjs.com/package/rm-colorful-console-logger) |


### Notifications

| Library           | Description                                       | npm Link                                                                                              |
| ----------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **rm-pushnotify** | Lightweight push-style toast notification utility | [![npm](https://img.shields.io/npm/v/rm-pushnotify.svg)](https://www.npmjs.com/package/rm-pushnotify) |



### Meta & Personal Branding

| Library         | Description                                                      | npm Link                                                                                          |
| --------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **about-rajat** | Developer portfolio package for branding and quick personal info | [![npm](https://img.shields.io/npm/v/about-rajat.svg)](https://www.npmjs.com/package/about-rajat) |


### All Packages

Browse all my packages:
- [npm: rajatmalik](https://www.npmjs.com/settings/rajatmalik/packages)
- [GitHub: @malikrajat](https://github.com/malikrajat?tab=repositories)

## Author

**Rajat Malik**

Full-stack developer | Open Source Contributor | Passionate about creating developer-friendly tools and libraries.

- Website: [rajatmalik.dev](https://rajatmalik.dev)
- Email: [mr.rajatmalik@gmail.com](mailto:mr.rajatmalik@gmail.com)
- LinkedIn: [Connect with me](mailto:mr.rajatmalik@gmail.com?subject=Hello%20Rajat&body=I%20want%20to%20connect%20with%20you.)
- GitHub: [@malikrajat](https://github.com/malikrajat)
- npm: [rajatmalik](https://www.npmjs.com/~rajatmalik)

---
<p align="center">
  <b>Built with care for the Angular community</b>
</p>

<p align="center">
  <a href="https://github.com/malikrajat/rm-ng-star-rating/stargazers">Star on GitHub</a> •
  <a href="https://www.npmjs.com/package/rm-ng-star-rating">View on npm</a> •
  <a href="https://github.com/malikrajat/rm-ng-star-rating/issues">Report Issue</a> •
  <a href="https://stackblitz.com/edit/stackblitz-starters-gryqaz">Try Demo</a>
</p>

<p align="center">
  Made with dedication by <a href="https://rajatmalik.dev">Rajat Malik</a>
</p>



