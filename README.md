<p align="center">
  <h1 align="center">Angular Star Rating</h1>
  <p align="center">Advanced, customizable, Optimized ,Minimal, light-weight Angular ratings.</p>
</p>

[![npm](https://img.shields.io/npm/v/ngx-bar-rating.svg)](https://www.npmjs.com/package/rm-ng-star-rating)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/malikrajat/rm-ng-star-rating)

___

# RmNgStarRating for Angular

A fully customizable and feature-rich Angular standalone component for advanced star ratings with precision and responsive design

If you like this plugin, please give it a star ⭐.

<a name="installation"/>

## Installation

Install it with npm

```bash
npm i rm-ng-star-rating
yarn: yarn add rm-ng-star-rating
```


## Live DEMO

[See the implementation here](https://stackblitz.com/edit/stackblitz-starters-terqbx)


<a name="usage"/>

## Basic usage:

Import  `RmNgStarRatingComponent` in your component imports.

```ts
@Component({
  standalone: true,
  selector: 'app',
  template: `
   <rm-ng-star-rating
      [rating]="4"
      [starCount]="5"
      [color]="'yellow'"
      [size]="'24px'"
      [emptyColor]="'lightgray'"
      [readOnly]="false"
      (ratingUpdated)="onRatingUpdated($event)"
   ></rm-ng-star-rating>
  `,
  styleUrl: './example.component.scss',
  imports: [RmNgStarRatingComponent]
})
export class AppComponent {
  onRatingUpdated(newRating: number) {
    console.log('New Rating:', newRating);
  }
}

```
<a name="versuion"/>

### Version Mapping

| Version | Ng   |
|---------|------|
| 1.x.x   | 18.x |

<a name="options"/>

## Rating inputs and outputs:

| Name                | Description                                                          | Default    |
|---------------------|----------------------------------------------------------------------|------------|
| **[rating]**        | Current rating to be displayed on load                               | 0          |
| **[starCount]**     | Number of start to be display on load                                | 5          |
| **[color]**         | Color to be display on mouse over                                    | yellow     |
| **[readonly]**      | A flag that indicates if rating can be changed                       | false      |
| **[emptyColor]**    | Display default star color                                           | lightgray  |
| **[size]**          | Font size for start in `px`                                          | 24         |
| **(ratingUpdated)** | A stream that emits when the rating value is changed                 |            |



<a name="issues"/>

## Issues

If you identify any errors in this component, or have an idea for an improvement, please open
an [issue](https://github.com/malikrajat/rm-ng-star-rating/issues). I am excited to see what the community thinks of this
project, and I would love your input!

<a name="Author Services"/>

## Author services

Are you interested in this library but lacks features? Write to the author, he can do it for you.

<a name="Roadmap"/>

## Roadmap

`Decimal value` - Showing and highlight in decimal to star. <br/>
`Tooltip` - Display tooltip once mouse over  

<a name="author"/>

## Author

**Rajat Malik**

- [github/malikrajat](https://github.com/malikrajat)


