import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RmNgStarRatingComponent } from 'rm-ng-star-rating';

@Component({
    selector: 'app-custom-styling',
    standalone: true,
    imports: [CommonModule, RmNgStarRatingComponent],
    template: `
    <div class="example-container">
      <h2>Custom Styling & Theming</h2>
      <p>Adjusting size, colors, and the number of stars.</p>

      <section class="style-item">
        <h3>Large Red Stars (10 stars)</h3>
        <rm-ng-star-rating 
          [rating]="7.5" 
          [starCount]="10" 
          [size]="'60px'" 
          [color]="'#e74c3c'" 
          [emptyColor]="'#fadbd8'">
        </rm-ng-star-rating>
      </section>

      <section class="style-item">
        <h3>Small Indigo Stars</h3>
        <rm-ng-star-rating 
          [rating]="4" 
          [size]="'24px'" 
          [color]="'#3f51b5'" 
          [emptyColor]="'#e8eaf6'">
        </rm-ng-star-rating>
      </section>

      <section class="style-item">
        <h3>Modern Dark Theme</h3>
        <div class="dark-box">
          <rm-ng-star-rating 
            [rating]="4.5" 
            [size]="'40px'" 
            [color]="'#f1c40f'" 
            [emptyColor]="'#34495e'">
          </rm-ng-star-rating>
        </div>
      </section>
    </div>
  `,
    styles: [`
    .example-container {
      padding: 20px;
    }
    .style-item {
      margin-bottom: 30px;
      padding: 15px;
      border-bottom: 1px dashed #ccc;
    }
    .dark-box {
      background-color: #2c3e50;
      padding: 20px;
      border-radius: 8px;
      display: inline-block;
    }
    h3 {
      margin-top: 0;
      color: #555;
    }
  `]
})
export class CustomStylingComponent { }
