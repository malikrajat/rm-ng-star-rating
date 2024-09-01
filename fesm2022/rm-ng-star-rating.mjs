import * as i0 from '@angular/core';
import { EventEmitter, Component, Output, Input, HostBinding } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class RmNgStarRatingComponent {
    ratingUpdated = new EventEmitter();
    color = 'gold';
    emptyColor = 'lightgray';
    size = '40px';
    rating = 0;
    starCount = 5;
    readOnly = false;
    // it is for showing pointing ratiing
    // @Input() decimalRatting: boolean = false;
    // @ViewChild('tooltip', {static: false}) tooltip!: ElementRef;
    hovered = 0;
    hoveredRating = 0;
    starsArray = [];
    ngOnInit() {
        this.starsArray = Array.from({ length: this.starCount });
    }
    onMouseEnter(index, event) {
        if (!this.readOnly) {
            this.hovered = index;
            this.hoveredRating = index;
            // it is for showing pointing ratiing
            // this.hoveredRating = this.calculateRating(index, event);
            // const tooltipElement = this.tooltip.nativeElement as HTMLElement;
            // tooltipElement.style.display = 'block';
            // this.positionTooltip(event);
        }
    }
    onMouseLeave() {
        if (!this.readOnly) {
            this.hovered = 0;
            this.hoveredRating = 0;
            // const tooltipElement = this.tooltip.nativeElement as HTMLElement;
            // tooltipElement.style.display = 'none';
        }
    }
    onClick(index) {
        if (!this.readOnly) {
            this.rating = index;
            // it is for showing pointing ratiing
            // this.rating = this.calculateRating(index);
            this.ratingUpdated.emit(this.rating);
        }
    }
    getStarClass(index) {
        return this.hovered >= index || this.rating >= index
            ? 'star-filled'
            : 'star-empty';
    }
    // it is for showing pointing ratiing
    // getStarClass(index: number): string {
    //   if (this.hovered >= index || this.rating >= index) {
    //     const fullStars = Math.floor(this.rating);
    //     const fractionalPart = this.rating - fullStars;
    //     if (index === fullStars + 1 && fractionalPart > 0) {
    //       return 'star-half-filled';
    //     }
    //     return 'star-filled';
    //   }
    //   return 'star-empty';
    // }
    calculateRating(index, event) {
        if (event) {
            const starWidth = event.target.offsetWidth;
            const offsetX = event.clientX -
                event.target.getBoundingClientRect().left;
            const fraction = Math.min(1, Math.max(0, offsetX / starWidth));
            return index - 1 + fraction;
        }
        return index;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.2", ngImport: i0, type: RmNgStarRatingComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.2", type: RmNgStarRatingComponent, isStandalone: true, selector: "rm-ng-star-rating", inputs: { color: "color", emptyColor: "emptyColor", size: "size", rating: "rating", starCount: "starCount", readOnly: "readOnly" }, outputs: { ratingUpdated: "ratingUpdated" }, host: { properties: { "style.--star-color": "this.color", "style.--star-empty-color": "this.emptyColor", "style.--star-size": "this.size" } }, ngImport: i0, template: "<!--<div class=\"star-rating\" [ngStyle]=\"{'font-size.px': size}\">-->\n<!--  <span *ngFor=\"let star of [].constructor(starCount); let i = index\"-->\n<!--        class=\"star\"-->\n<!--        [ngClass]=\"getStarClass(i + 1)\"-->\n<!--        (mouseenter)=\"onMouseEnter(i + 1)\"-->\n<!--        (mouseleave)=\"onMouseLeave()\"-->\n<!--        (click)=\"onClick(i + 1)\">-->\n<!--     \u2605-->\n<!--  </span>-->\n<!--</div>-->\n\n<!--<div class=\"star-rating-container\">-->\n<!--  <div class=\"star-rating\" [ngStyle]=\"{'font-size.px': size}\">-->\n<!--    <span *ngFor=\"let star of starsArray; let i = index\"-->\n<!--          class=\"star-wrapper\"-->\n<!--          (mouseenter)=\"onMouseEnter(i + 1, $event)\"-->\n<!--          (mouseleave)=\"onMouseLeave()\">-->\n<!--      <span class=\"star\"-->\n<!--            [ngClass]=\"getStarClass(i + 1)\"-->\n<!--            (click)=\"onClick(i + 1)\">-->\n<!--        \u2605-->\n<!--      </span>-->\n<!--      &lt;!&ndash; Tooltip displayed above the star &ndash;&gt;-->\n<!--      <div class=\"tooltip\" #tooltip>-->\n<!--        {{ hoveredRating }}-->\n<!--      </div>-->\n<!--    </span>-->\n<!--  </div>-->\n<!--</div>-->\n\n<div class=\"star-rating-container\">\n  <div class=\"star-rating\" [ngStyle]=\"{ 'font-size.px': size }\">\n    <span\n      *ngFor=\"let star of starsArray; let i = index\"\n      class=\"star-wrapper\"\n      (mouseenter)=\"onMouseEnter(i + 1, $event)\"\n      (mouseleave)=\"onMouseLeave()\"\n    >\n      <span\n        class=\"star\"\n        [ngClass]=\"getStarClass(i + 1)\"\n        (click)=\"onClick(i + 1)\"\n      >\n        \u2605\n      </span>\n    </span>\n  </div>\n  <!-- Tooltip element -->\n  <!--  <div class=\"tooltip\" #tooltip>-->\n  <!--    {{ hoveredRating }}-->\n  <!--  </div>-->\n</div>\n", styles: [":host{--star-size: 24px;--star-color: gold;--star-empty-color: lightgray}.star-rating{display:flex;cursor:pointer;-webkit-user-select:none;user-select:none}.star{font-size:var(--star-size);transition:color .2s}.star-filled{color:var(--star-color)}.star-empty{color:var(--star-empty-color)}.star-rating-container{display:inline-block;position:relative}.tooltip{position:absolute;background-color:#000;color:#fff;padding:2px 6px;border-radius:4px;font-size:12px;white-space:nowrap;display:none;pointer-events:none;z-index:1}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.2", ngImport: i0, type: RmNgStarRatingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'rm-ng-star-rating', standalone: true, imports: [CommonModule], template: "<!--<div class=\"star-rating\" [ngStyle]=\"{'font-size.px': size}\">-->\n<!--  <span *ngFor=\"let star of [].constructor(starCount); let i = index\"-->\n<!--        class=\"star\"-->\n<!--        [ngClass]=\"getStarClass(i + 1)\"-->\n<!--        (mouseenter)=\"onMouseEnter(i + 1)\"-->\n<!--        (mouseleave)=\"onMouseLeave()\"-->\n<!--        (click)=\"onClick(i + 1)\">-->\n<!--     \u2605-->\n<!--  </span>-->\n<!--</div>-->\n\n<!--<div class=\"star-rating-container\">-->\n<!--  <div class=\"star-rating\" [ngStyle]=\"{'font-size.px': size}\">-->\n<!--    <span *ngFor=\"let star of starsArray; let i = index\"-->\n<!--          class=\"star-wrapper\"-->\n<!--          (mouseenter)=\"onMouseEnter(i + 1, $event)\"-->\n<!--          (mouseleave)=\"onMouseLeave()\">-->\n<!--      <span class=\"star\"-->\n<!--            [ngClass]=\"getStarClass(i + 1)\"-->\n<!--            (click)=\"onClick(i + 1)\">-->\n<!--        \u2605-->\n<!--      </span>-->\n<!--      &lt;!&ndash; Tooltip displayed above the star &ndash;&gt;-->\n<!--      <div class=\"tooltip\" #tooltip>-->\n<!--        {{ hoveredRating }}-->\n<!--      </div>-->\n<!--    </span>-->\n<!--  </div>-->\n<!--</div>-->\n\n<div class=\"star-rating-container\">\n  <div class=\"star-rating\" [ngStyle]=\"{ 'font-size.px': size }\">\n    <span\n      *ngFor=\"let star of starsArray; let i = index\"\n      class=\"star-wrapper\"\n      (mouseenter)=\"onMouseEnter(i + 1, $event)\"\n      (mouseleave)=\"onMouseLeave()\"\n    >\n      <span\n        class=\"star\"\n        [ngClass]=\"getStarClass(i + 1)\"\n        (click)=\"onClick(i + 1)\"\n      >\n        \u2605\n      </span>\n    </span>\n  </div>\n  <!-- Tooltip element -->\n  <!--  <div class=\"tooltip\" #tooltip>-->\n  <!--    {{ hoveredRating }}-->\n  <!--  </div>-->\n</div>\n", styles: [":host{--star-size: 24px;--star-color: gold;--star-empty-color: lightgray}.star-rating{display:flex;cursor:pointer;-webkit-user-select:none;user-select:none}.star{font-size:var(--star-size);transition:color .2s}.star-filled{color:var(--star-color)}.star-empty{color:var(--star-empty-color)}.star-rating-container{display:inline-block;position:relative}.tooltip{position:absolute;background-color:#000;color:#fff;padding:2px 6px;border-radius:4px;font-size:12px;white-space:nowrap;display:none;pointer-events:none;z-index:1}\n"] }]
        }], propDecorators: { ratingUpdated: [{
                type: Output
            }], color: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['style.--star-color']
            }], emptyColor: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['style.--star-empty-color']
            }], size: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['style.--star-size']
            }], rating: [{
                type: Input
            }], starCount: [{
                type: Input
            }], readOnly: [{
                type: Input
            }] } });

/*
 * Public API Surface of rm-ng-star-rating
 */

/**
 * Generated bundle index. Do not edit.
 */

export { RmNgStarRatingComponent };
//# sourceMappingURL=rm-ng-star-rating.mjs.map
