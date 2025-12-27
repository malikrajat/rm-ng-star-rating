import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RmNgStarRatingComponent } from 'rm-ng-star-rating';

@Component({
    selector: 'app-data-export',
    standalone: true,
    imports: [CommonModule, RmNgStarRatingComponent],
    template: `
    <div class="example-container">
      <h2>Data Export & Reporting</h2>
      <p>Preparing and exporting rating data for reports, CSVs, or "High-Quality" documents.</p>

      <div class="data-preview">
        <h3>Current Stats</h3>
        <div class="stat-row">
          <span>Avg Rating:</span> <strong>{{ averageRating | number:'1.1-1' }}</strong>
        </div>
        <div class="stat-row">
          <span>Total Reviews:</span> <strong>{{ reviews.length }}</strong>
        </div>
      </div>

      <div class="actions">
        <button (click)="exportAsJson()">Export as JSON</button>
        <button (click)="exportAsCsv()">Export as CSV</button>
        <button (click)="generateReport()">Generate High-Quality Report (Mock)</button>
      </div>

      <div *ngIf="exportResult" class="export-result">
        <h4>Exported Output:</h4>
        <pre>{{ exportResult }}</pre>
      </div>
    </div>
  `,
    styles: [`
    .example-container { padding: 20px; }
    .data-preview { margin-bottom: 20px; padding: 15px; background: #f1f8ff; border-radius: 8px; border: 1px solid #c8e1ff; }
    .stat-row { display: flex; justify-content: space-between; margin-bottom: 5px; }
    .actions { display: flex; gap: 10px; margin-bottom: 20px; }
    .export-result { padding: 15px; background: #f6f8fa; border: 1px solid #d1d5da; border-radius: 4px; overflow-x: auto; }
    button { padding: 8px 16px; background: #0366d6; color: #white; border: none; border-radius: 4px; cursor: pointer; }
    button:hover { background: #0056b3; }
  `]
})
export class DataExportComponent {
    reviews = [
        { id: 1, user: 'User A', rating: 4.5 },
        { id: 2, user: 'User B', rating: 3.0 },
        { id: 3, user: 'User C', rating: 5.0 }
    ];

    exportResult: string | null = null;

    get averageRating() {
        return this.reviews.reduce((acc, curr) => acc + curr.rating, 0) / this.reviews.length;
    }

    exportAsJson() {
        const data = {
            timestamp: new Date().toISOString(),
            average: this.averageRating,
            reviews: this.reviews
        };
        this.exportResult = JSON.stringify(data, null, 2);
    }

    exportAsCsv() {
        const header = 'ID,User,Rating\n';
        const rows = this.reviews.map(r => `${r.id},${r.user},${r.rating}`).join('\n');
        this.exportResult = header + rows;
    }

    generateReport() {
        this.exportResult = `
========================================
       STAR RATING PERFORMANCE REPORT
========================================
Generated: ${new Date().toLocaleString()}
Global Score: ${this.averageRating.toFixed(2)} / 5.00
----------------------------------------
Review Breakdown:
${this.reviews.map(r => `[ID ${r.id}] ${r.user}: ${'*'.repeat(Math.round(r.rating))}`).join('\n')}
----------------------------------------
Summary: Excellent performance recorded.
========================================
    `;
    }
}
