import { Component, EventEmitter, HostBinding, Input, Output, } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class RmNgStarRatingComponent {
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.2", type: RmNgStarRatingComponent, isStandalone: true, selector: "rm-ng-star-rating", inputs: { color: "color", emptyColor: "emptyColor", size: "size", rating: "rating", starCount: "starCount", readOnly: "readOnly" }, outputs: { ratingUpdated: "ratingUpdated" }, host: { properties: { "style.--star-color": "this.color", "style.--star-empty-color": "this.emptyColor", "style.--star-size": "this.size" } }, ngImport: i0, template: "<!--<div class=\"star-rating\" [ngStyle]=\"{'font-size.px': size}\">-->\r\n<!--  <span *ngFor=\"let star of [].constructor(starCount); let i = index\"-->\r\n<!--        class=\"star\"-->\r\n<!--        [ngClass]=\"getStarClass(i + 1)\"-->\r\n<!--        (mouseenter)=\"onMouseEnter(i + 1)\"-->\r\n<!--        (mouseleave)=\"onMouseLeave()\"-->\r\n<!--        (click)=\"onClick(i + 1)\">-->\r\n<!--     \u2605-->\r\n<!--  </span>-->\r\n<!--</div>-->\r\n\r\n<!--<div class=\"star-rating-container\">-->\r\n<!--  <div class=\"star-rating\" [ngStyle]=\"{'font-size.px': size}\">-->\r\n<!--    <span *ngFor=\"let star of starsArray; let i = index\"-->\r\n<!--          class=\"star-wrapper\"-->\r\n<!--          (mouseenter)=\"onMouseEnter(i + 1, $event)\"-->\r\n<!--          (mouseleave)=\"onMouseLeave()\">-->\r\n<!--      <span class=\"star\"-->\r\n<!--            [ngClass]=\"getStarClass(i + 1)\"-->\r\n<!--            (click)=\"onClick(i + 1)\">-->\r\n<!--        \u2605-->\r\n<!--      </span>-->\r\n<!--      &lt;!&ndash; Tooltip displayed above the star &ndash;&gt;-->\r\n<!--      <div class=\"tooltip\" #tooltip>-->\r\n<!--        {{ hoveredRating }}-->\r\n<!--      </div>-->\r\n<!--    </span>-->\r\n<!--  </div>-->\r\n<!--</div>-->\r\n\r\n<div class=\"star-rating-container\">\r\n  <div class=\"star-rating\" [ngStyle]=\"{ 'font-size.px': size }\">\r\n    <span\r\n      *ngFor=\"let star of starsArray; let i = index\"\r\n      class=\"star-wrapper\"\r\n      (mouseenter)=\"onMouseEnter(i + 1, $event)\"\r\n      (mouseleave)=\"onMouseLeave()\"\r\n    >\r\n      <span\r\n        class=\"star\"\r\n        [ngClass]=\"getStarClass(i + 1)\"\r\n        (click)=\"onClick(i + 1)\"\r\n      >\r\n        \u2605\r\n      </span>\r\n    </span>\r\n  </div>\r\n  <!-- Tooltip element -->\r\n  <!--  <div class=\"tooltip\" #tooltip>-->\r\n  <!--    {{ hoveredRating }}-->\r\n  <!--  </div>-->\r\n</div>\r\n", styles: [":host{--star-size: 24px;--star-color: gold;--star-empty-color: lightgray}.star-rating{display:flex;cursor:pointer;-webkit-user-select:none;user-select:none}.star{font-size:var(--star-size);transition:color .2s}.star-filled{color:var(--star-color)}.star-empty{color:var(--star-empty-color)}.star-rating-container{display:inline-block;position:relative}.tooltip{position:absolute;background-color:#000;color:#fff;padding:2px 6px;border-radius:4px;font-size:12px;white-space:nowrap;display:none;pointer-events:none;z-index:1}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.2", ngImport: i0, type: RmNgStarRatingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'rm-ng-star-rating', standalone: true, imports: [CommonModule], template: "<!--<div class=\"star-rating\" [ngStyle]=\"{'font-size.px': size}\">-->\r\n<!--  <span *ngFor=\"let star of [].constructor(starCount); let i = index\"-->\r\n<!--        class=\"star\"-->\r\n<!--        [ngClass]=\"getStarClass(i + 1)\"-->\r\n<!--        (mouseenter)=\"onMouseEnter(i + 1)\"-->\r\n<!--        (mouseleave)=\"onMouseLeave()\"-->\r\n<!--        (click)=\"onClick(i + 1)\">-->\r\n<!--     \u2605-->\r\n<!--  </span>-->\r\n<!--</div>-->\r\n\r\n<!--<div class=\"star-rating-container\">-->\r\n<!--  <div class=\"star-rating\" [ngStyle]=\"{'font-size.px': size}\">-->\r\n<!--    <span *ngFor=\"let star of starsArray; let i = index\"-->\r\n<!--          class=\"star-wrapper\"-->\r\n<!--          (mouseenter)=\"onMouseEnter(i + 1, $event)\"-->\r\n<!--          (mouseleave)=\"onMouseLeave()\">-->\r\n<!--      <span class=\"star\"-->\r\n<!--            [ngClass]=\"getStarClass(i + 1)\"-->\r\n<!--            (click)=\"onClick(i + 1)\">-->\r\n<!--        \u2605-->\r\n<!--      </span>-->\r\n<!--      &lt;!&ndash; Tooltip displayed above the star &ndash;&gt;-->\r\n<!--      <div class=\"tooltip\" #tooltip>-->\r\n<!--        {{ hoveredRating }}-->\r\n<!--      </div>-->\r\n<!--    </span>-->\r\n<!--  </div>-->\r\n<!--</div>-->\r\n\r\n<div class=\"star-rating-container\">\r\n  <div class=\"star-rating\" [ngStyle]=\"{ 'font-size.px': size }\">\r\n    <span\r\n      *ngFor=\"let star of starsArray; let i = index\"\r\n      class=\"star-wrapper\"\r\n      (mouseenter)=\"onMouseEnter(i + 1, $event)\"\r\n      (mouseleave)=\"onMouseLeave()\"\r\n    >\r\n      <span\r\n        class=\"star\"\r\n        [ngClass]=\"getStarClass(i + 1)\"\r\n        (click)=\"onClick(i + 1)\"\r\n      >\r\n        \u2605\r\n      </span>\r\n    </span>\r\n  </div>\r\n  <!-- Tooltip element -->\r\n  <!--  <div class=\"tooltip\" #tooltip>-->\r\n  <!--    {{ hoveredRating }}-->\r\n  <!--  </div>-->\r\n</div>\r\n", styles: [":host{--star-size: 24px;--star-color: gold;--star-empty-color: lightgray}.star-rating{display:flex;cursor:pointer;-webkit-user-select:none;user-select:none}.star{font-size:var(--star-size);transition:color .2s}.star-filled{color:var(--star-color)}.star-empty{color:var(--star-empty-color)}.star-rating-container{display:inline-block;position:relative}.tooltip{position:absolute;background-color:#000;color:#fff;padding:2px 6px;border-radius:4px;font-size:12px;white-space:nowrap;display:none;pointer-events:none;z-index:1}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm0tbmctc3Rhci1yYXRpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJvamVjdHMvcm0tbmctc3Rhci1yYXRpbmcvc3JjL2xpYi9ybS1uZy1zdGFyLXJhdGluZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi9wcm9qZWN0cy9ybS1uZy1zdGFyLXJhdGluZy9zcmMvbGliL3JtLW5nLXN0YXItcmF0aW5nLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBRUwsTUFBTSxHQUVQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBUy9DLE1BQU0sT0FBTyx1QkFBdUI7SUFDeEIsYUFBYSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ3ZCLEtBQUssR0FBVyxNQUFNLENBQUM7SUFDakIsVUFBVSxHQUMxRCxXQUFXLENBQUM7SUFDNkIsSUFBSSxHQUFXLE1BQU0sQ0FBQztJQUN4RCxNQUFNLEdBQVcsQ0FBQyxDQUFDO0lBQ25CLFNBQVMsR0FBVyxDQUFDLENBQUM7SUFDdEIsUUFBUSxHQUFZLEtBQUssQ0FBQztJQUNuQyxxQ0FBcUM7SUFDckMsNENBQTRDO0lBQzVDLCtEQUErRDtJQUUvRCxPQUFPLEdBQVcsQ0FBQyxDQUFDO0lBQ3BCLGFBQWEsR0FBVyxDQUFDLENBQUM7SUFDMUIsVUFBVSxHQUFVLEVBQUUsQ0FBQztJQUV2QixRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxZQUFZLENBQUMsS0FBYSxFQUFFLEtBQWlCO1FBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IscUNBQXFDO1lBQ3JDLDJEQUEyRDtZQUMzRCxvRUFBb0U7WUFDcEUsMENBQTBDO1lBQzFDLCtCQUErQjtRQUNqQyxDQUFDO0lBQ0gsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLG9FQUFvRTtZQUNwRSx5Q0FBeUM7UUFDM0MsQ0FBQztJQUNILENBQUM7SUFFRCxPQUFPLENBQUMsS0FBYTtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLHFDQUFxQztZQUNyQyw2Q0FBNkM7WUFDN0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7SUFDSCxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQWE7UUFDeEIsT0FBTyxJQUFJLENBQUMsT0FBTyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUs7WUFDbEQsQ0FBQyxDQUFDLGFBQWE7WUFDZixDQUFDLENBQUMsWUFBWSxDQUFDO0lBQ25CLENBQUM7SUFFRCxxQ0FBcUM7SUFDckMsd0NBQXdDO0lBQ3hDLHlEQUF5RDtJQUN6RCxpREFBaUQ7SUFDakQsc0RBQXNEO0lBQ3RELDJEQUEyRDtJQUMzRCxtQ0FBbUM7SUFDbkMsUUFBUTtJQUNSLDRCQUE0QjtJQUM1QixNQUFNO0lBQ04seUJBQXlCO0lBQ3pCLElBQUk7SUFFSixlQUFlLENBQUMsS0FBYSxFQUFFLEtBQWtCO1FBQy9DLElBQUksS0FBSyxFQUFFLENBQUM7WUFDVixNQUFNLFNBQVMsR0FBSSxLQUFLLENBQUMsTUFBc0IsQ0FBQyxXQUFXLENBQUM7WUFDNUQsTUFBTSxPQUFPLEdBQ1gsS0FBSyxDQUFDLE9BQU87Z0JBQ1osS0FBSyxDQUFDLE1BQXNCLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDN0QsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsT0FBTyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDL0QsT0FBTyxLQUFLLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUM5QixDQUFDO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO3VHQWhGVSx1QkFBdUI7MkZBQXZCLHVCQUF1Qiw2WUNuQnBDLHczREFvREEscWtCRHJDWSxZQUFZOzsyRkFJWCx1QkFBdUI7a0JBUG5DLFNBQVM7K0JBQ0UsbUJBQW1CLGNBQ2pCLElBQUksV0FDUCxDQUFDLFlBQVksQ0FBQzs4QkFLYixhQUFhO3NCQUF0QixNQUFNO2dCQUNxQyxLQUFLO3NCQUFoRCxLQUFLOztzQkFBSSxXQUFXO3VCQUFDLG9CQUFvQjtnQkFDUSxVQUFVO3NCQUEzRCxLQUFLOztzQkFBSSxXQUFXO3VCQUFDLDBCQUEwQjtnQkFFTCxJQUFJO3NCQUE5QyxLQUFLOztzQkFBSSxXQUFXO3VCQUFDLG1CQUFtQjtnQkFDaEMsTUFBTTtzQkFBZCxLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdybS1uZy1zdGFyLXJhdGluZycsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vcm0tbmctc3Rhci1yYXRpbmcuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3JtLW5nLXN0YXItcmF0aW5nLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJtTmdTdGFyUmF0aW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBAT3V0cHV0KCkgcmF0aW5nVXBkYXRlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdzdHlsZS4tLXN0YXItY29sb3InKSBjb2xvcjogc3RyaW5nID0gJ2dvbGQnO1xyXG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZygnc3R5bGUuLS1zdGFyLWVtcHR5LWNvbG9yJykgZW1wdHlDb2xvcjogc3RyaW5nID1cclxuICAgICdsaWdodGdyYXknO1xyXG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZygnc3R5bGUuLS1zdGFyLXNpemUnKSBzaXplOiBzdHJpbmcgPSAnNDBweCc7XHJcbiAgQElucHV0KCkgcmF0aW5nOiBudW1iZXIgPSAwO1xyXG4gIEBJbnB1dCgpIHN0YXJDb3VudDogbnVtYmVyID0gNTtcclxuICBASW5wdXQoKSByZWFkT25seTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8vIGl0IGlzIGZvciBzaG93aW5nIHBvaW50aW5nIHJhdGlpbmdcclxuICAvLyBASW5wdXQoKSBkZWNpbWFsUmF0dGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8vIEBWaWV3Q2hpbGQoJ3Rvb2x0aXAnLCB7c3RhdGljOiBmYWxzZX0pIHRvb2x0aXAhOiBFbGVtZW50UmVmO1xyXG5cclxuICBob3ZlcmVkOiBudW1iZXIgPSAwO1xyXG4gIGhvdmVyZWRSYXRpbmc6IG51bWJlciA9IDA7XHJcbiAgc3RhcnNBcnJheTogYW55W10gPSBbXTtcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0YXJzQXJyYXkgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLnN0YXJDb3VudCB9KTtcclxuICB9XHJcblxyXG4gIG9uTW91c2VFbnRlcihpbmRleDogbnVtYmVyLCBldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnJlYWRPbmx5KSB7XHJcbiAgICAgIHRoaXMuaG92ZXJlZCA9IGluZGV4O1xyXG4gICAgICB0aGlzLmhvdmVyZWRSYXRpbmcgPSBpbmRleDtcclxuICAgICAgLy8gaXQgaXMgZm9yIHNob3dpbmcgcG9pbnRpbmcgcmF0aWluZ1xyXG4gICAgICAvLyB0aGlzLmhvdmVyZWRSYXRpbmcgPSB0aGlzLmNhbGN1bGF0ZVJhdGluZyhpbmRleCwgZXZlbnQpO1xyXG4gICAgICAvLyBjb25zdCB0b29sdGlwRWxlbWVudCA9IHRoaXMudG9vbHRpcC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAvLyB0b29sdGlwRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgLy8gdGhpcy5wb3NpdGlvblRvb2x0aXAoZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Nb3VzZUxlYXZlKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnJlYWRPbmx5KSB7XHJcbiAgICAgIHRoaXMuaG92ZXJlZCA9IDA7XHJcbiAgICAgIHRoaXMuaG92ZXJlZFJhdGluZyA9IDA7XHJcbiAgICAgIC8vIGNvbnN0IHRvb2x0aXBFbGVtZW50ID0gdGhpcy50b29sdGlwLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIC8vIHRvb2x0aXBFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5yZWFkT25seSkge1xyXG4gICAgICB0aGlzLnJhdGluZyA9IGluZGV4O1xyXG4gICAgICAvLyBpdCBpcyBmb3Igc2hvd2luZyBwb2ludGluZyByYXRpaW5nXHJcbiAgICAgIC8vIHRoaXMucmF0aW5nID0gdGhpcy5jYWxjdWxhdGVSYXRpbmcoaW5kZXgpO1xyXG4gICAgICB0aGlzLnJhdGluZ1VwZGF0ZWQuZW1pdCh0aGlzLnJhdGluZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRTdGFyQ2xhc3MoaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5ob3ZlcmVkID49IGluZGV4IHx8IHRoaXMucmF0aW5nID49IGluZGV4XHJcbiAgICAgID8gJ3N0YXItZmlsbGVkJ1xyXG4gICAgICA6ICdzdGFyLWVtcHR5JztcclxuICB9XHJcblxyXG4gIC8vIGl0IGlzIGZvciBzaG93aW5nIHBvaW50aW5nIHJhdGlpbmdcclxuICAvLyBnZXRTdGFyQ2xhc3MoaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgLy8gICBpZiAodGhpcy5ob3ZlcmVkID49IGluZGV4IHx8IHRoaXMucmF0aW5nID49IGluZGV4KSB7XHJcbiAgLy8gICAgIGNvbnN0IGZ1bGxTdGFycyA9IE1hdGguZmxvb3IodGhpcy5yYXRpbmcpO1xyXG4gIC8vICAgICBjb25zdCBmcmFjdGlvbmFsUGFydCA9IHRoaXMucmF0aW5nIC0gZnVsbFN0YXJzO1xyXG4gIC8vICAgICBpZiAoaW5kZXggPT09IGZ1bGxTdGFycyArIDEgJiYgZnJhY3Rpb25hbFBhcnQgPiAwKSB7XHJcbiAgLy8gICAgICAgcmV0dXJuICdzdGFyLWhhbGYtZmlsbGVkJztcclxuICAvLyAgICAgfVxyXG4gIC8vICAgICByZXR1cm4gJ3N0YXItZmlsbGVkJztcclxuICAvLyAgIH1cclxuICAvLyAgIHJldHVybiAnc3Rhci1lbXB0eSc7XHJcbiAgLy8gfVxyXG5cclxuICBjYWxjdWxhdGVSYXRpbmcoaW5kZXg6IG51bWJlciwgZXZlbnQ/OiBNb3VzZUV2ZW50KTogbnVtYmVyIHtcclxuICAgIGlmIChldmVudCkge1xyXG4gICAgICBjb25zdCBzdGFyV2lkdGggPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5vZmZzZXRXaWR0aDtcclxuICAgICAgY29uc3Qgb2Zmc2V0WCA9XHJcbiAgICAgICAgZXZlbnQuY2xpZW50WCAtXHJcbiAgICAgICAgKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuICAgICAgY29uc3QgZnJhY3Rpb24gPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCBvZmZzZXRYIC8gc3RhcldpZHRoKSk7XHJcbiAgICAgIHJldHVybiBpbmRleCAtIDEgKyBmcmFjdGlvbjtcclxuICAgIH1cclxuICAgIHJldHVybiBpbmRleDtcclxuICB9XHJcblxyXG4gIC8vIHBvc2l0aW9uVG9vbHRpcChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gIC8vICAgY29uc3QgdG9vbHRpcEVsZW1lbnQgPSB0aGlzLnRvb2x0aXAubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuICAvLyAgIGNvbnN0IHhPZmZzZXQgPSAtMTA7IC8vIERpc3RhbmNlIGZyb20gdGhlIHN0YXIgdG8gdGhlIHRvb2x0aXBcclxuICAvLyAgIGNvbnN0IHlPZmZzZXQgPSAtMzA7IC8vIFBvc2l0aW9uIGFib3ZlIHRoZSBzdGFyXHJcbiAgLy9cclxuICAvLyAgIHRvb2x0aXBFbGVtZW50LnN0eWxlLmxlZnQgPSBgJHtldmVudC5jbGllbnRYICsgeE9mZnNldH1weGA7XHJcbiAgLy8gICB0b29sdGlwRWxlbWVudC5zdHlsZS50b3AgPSBgJHtldmVudC5jbGllbnRZICsgeU9mZnNldH1weGA7XHJcbiAgLy8gfVxyXG59XHJcbiIsIjwhLS08ZGl2IGNsYXNzPVwic3Rhci1yYXRpbmdcIiBbbmdTdHlsZV09XCJ7J2ZvbnQtc2l6ZS5weCc6IHNpemV9XCI+LS0+XHJcbjwhLS0gIDxzcGFuICpuZ0Zvcj1cImxldCBzdGFyIG9mIFtdLmNvbnN0cnVjdG9yKHN0YXJDb3VudCk7IGxldCBpID0gaW5kZXhcIi0tPlxyXG48IS0tICAgICAgICBjbGFzcz1cInN0YXJcIi0tPlxyXG48IS0tICAgICAgICBbbmdDbGFzc109XCJnZXRTdGFyQ2xhc3MoaSArIDEpXCItLT5cclxuPCEtLSAgICAgICAgKG1vdXNlZW50ZXIpPVwib25Nb3VzZUVudGVyKGkgKyAxKVwiLS0+XHJcbjwhLS0gICAgICAgIChtb3VzZWxlYXZlKT1cIm9uTW91c2VMZWF2ZSgpXCItLT5cclxuPCEtLSAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2soaSArIDEpXCI+LS0+XHJcbjwhLS0gICAgIOKYhS0tPlxyXG48IS0tICA8L3NwYW4+LS0+XHJcbjwhLS08L2Rpdj4tLT5cclxuXHJcbjwhLS08ZGl2IGNsYXNzPVwic3Rhci1yYXRpbmctY29udGFpbmVyXCI+LS0+XHJcbjwhLS0gIDxkaXYgY2xhc3M9XCJzdGFyLXJhdGluZ1wiIFtuZ1N0eWxlXT1cInsnZm9udC1zaXplLnB4Jzogc2l6ZX1cIj4tLT5cclxuPCEtLSAgICA8c3BhbiAqbmdGb3I9XCJsZXQgc3RhciBvZiBzdGFyc0FycmF5OyBsZXQgaSA9IGluZGV4XCItLT5cclxuPCEtLSAgICAgICAgICBjbGFzcz1cInN0YXItd3JhcHBlclwiLS0+XHJcbjwhLS0gICAgICAgICAgKG1vdXNlZW50ZXIpPVwib25Nb3VzZUVudGVyKGkgKyAxLCAkZXZlbnQpXCItLT5cclxuPCEtLSAgICAgICAgICAobW91c2VsZWF2ZSk9XCJvbk1vdXNlTGVhdmUoKVwiPi0tPlxyXG48IS0tICAgICAgPHNwYW4gY2xhc3M9XCJzdGFyXCItLT5cclxuPCEtLSAgICAgICAgICAgIFtuZ0NsYXNzXT1cImdldFN0YXJDbGFzcyhpICsgMSlcIi0tPlxyXG48IS0tICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2soaSArIDEpXCI+LS0+XHJcbjwhLS0gICAgICAgIOKYhS0tPlxyXG48IS0tICAgICAgPC9zcGFuPi0tPlxyXG48IS0tICAgICAgJmx0OyEmbmRhc2g7IFRvb2x0aXAgZGlzcGxheWVkIGFib3ZlIHRoZSBzdGFyICZuZGFzaDsmZ3Q7LS0+XHJcbjwhLS0gICAgICA8ZGl2IGNsYXNzPVwidG9vbHRpcFwiICN0b29sdGlwPi0tPlxyXG48IS0tICAgICAgICB7eyBob3ZlcmVkUmF0aW5nIH19LS0+XHJcbjwhLS0gICAgICA8L2Rpdj4tLT5cclxuPCEtLSAgICA8L3NwYW4+LS0+XHJcbjwhLS0gIDwvZGl2Pi0tPlxyXG48IS0tPC9kaXY+LS0+XHJcblxyXG48ZGl2IGNsYXNzPVwic3Rhci1yYXRpbmctY29udGFpbmVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cInN0YXItcmF0aW5nXCIgW25nU3R5bGVdPVwieyAnZm9udC1zaXplLnB4Jzogc2l6ZSB9XCI+XHJcbiAgICA8c3BhblxyXG4gICAgICAqbmdGb3I9XCJsZXQgc3RhciBvZiBzdGFyc0FycmF5OyBsZXQgaSA9IGluZGV4XCJcclxuICAgICAgY2xhc3M9XCJzdGFyLXdyYXBwZXJcIlxyXG4gICAgICAobW91c2VlbnRlcik9XCJvbk1vdXNlRW50ZXIoaSArIDEsICRldmVudClcIlxyXG4gICAgICAobW91c2VsZWF2ZSk9XCJvbk1vdXNlTGVhdmUoKVwiXHJcbiAgICA+XHJcbiAgICAgIDxzcGFuXHJcbiAgICAgICAgY2xhc3M9XCJzdGFyXCJcclxuICAgICAgICBbbmdDbGFzc109XCJnZXRTdGFyQ2xhc3MoaSArIDEpXCJcclxuICAgICAgICAoY2xpY2spPVwib25DbGljayhpICsgMSlcIlxyXG4gICAgICA+XHJcbiAgICAgICAg4piFXHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvc3Bhbj5cclxuICA8L2Rpdj5cclxuICA8IS0tIFRvb2x0aXAgZWxlbWVudCAtLT5cclxuICA8IS0tICA8ZGl2IGNsYXNzPVwidG9vbHRpcFwiICN0b29sdGlwPi0tPlxyXG4gIDwhLS0gICAge3sgaG92ZXJlZFJhdGluZyB9fS0tPlxyXG4gIDwhLS0gIDwvZGl2Pi0tPlxyXG48L2Rpdj5cclxuIl19