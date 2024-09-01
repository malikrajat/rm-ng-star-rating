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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm0tbmctc3Rhci1yYXRpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvcm0tbmctc3Rhci1yYXRpbmcvc3JjL2xpYi9ybS1uZy1zdGFyLXJhdGluZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ybS1uZy1zdGFyLXJhdGluZy9zcmMvbGliL3JtLW5nLXN0YXItcmF0aW5nLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBRUwsTUFBTSxHQUVQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBUy9DLE1BQU0sT0FBTyx1QkFBdUI7SUFDeEIsYUFBYSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ3ZCLEtBQUssR0FBVyxNQUFNLENBQUM7SUFDakIsVUFBVSxHQUMxRCxXQUFXLENBQUM7SUFDNkIsSUFBSSxHQUFXLE1BQU0sQ0FBQztJQUN4RCxNQUFNLEdBQVcsQ0FBQyxDQUFDO0lBQ25CLFNBQVMsR0FBVyxDQUFDLENBQUM7SUFDdEIsUUFBUSxHQUFZLEtBQUssQ0FBQztJQUNuQyxxQ0FBcUM7SUFDckMsNENBQTRDO0lBQzVDLCtEQUErRDtJQUUvRCxPQUFPLEdBQVcsQ0FBQyxDQUFDO0lBQ3BCLGFBQWEsR0FBVyxDQUFDLENBQUM7SUFDMUIsVUFBVSxHQUFVLEVBQUUsQ0FBQztJQUV2QixRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxZQUFZLENBQUMsS0FBYSxFQUFFLEtBQWlCO1FBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IscUNBQXFDO1lBQ3JDLDJEQUEyRDtZQUMzRCxvRUFBb0U7WUFDcEUsMENBQTBDO1lBQzFDLCtCQUErQjtRQUNqQyxDQUFDO0lBQ0gsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLG9FQUFvRTtZQUNwRSx5Q0FBeUM7UUFDM0MsQ0FBQztJQUNILENBQUM7SUFFRCxPQUFPLENBQUMsS0FBYTtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLHFDQUFxQztZQUNyQyw2Q0FBNkM7WUFDN0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7SUFDSCxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQWE7UUFDeEIsT0FBTyxJQUFJLENBQUMsT0FBTyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUs7WUFDbEQsQ0FBQyxDQUFDLGFBQWE7WUFDZixDQUFDLENBQUMsWUFBWSxDQUFDO0lBQ25CLENBQUM7SUFFRCxxQ0FBcUM7SUFDckMsd0NBQXdDO0lBQ3hDLHlEQUF5RDtJQUN6RCxpREFBaUQ7SUFDakQsc0RBQXNEO0lBQ3RELDJEQUEyRDtJQUMzRCxtQ0FBbUM7SUFDbkMsUUFBUTtJQUNSLDRCQUE0QjtJQUM1QixNQUFNO0lBQ04seUJBQXlCO0lBQ3pCLElBQUk7SUFFSixlQUFlLENBQUMsS0FBYSxFQUFFLEtBQWtCO1FBQy9DLElBQUksS0FBSyxFQUFFLENBQUM7WUFDVixNQUFNLFNBQVMsR0FBSSxLQUFLLENBQUMsTUFBc0IsQ0FBQyxXQUFXLENBQUM7WUFDNUQsTUFBTSxPQUFPLEdBQ1gsS0FBSyxDQUFDLE9BQU87Z0JBQ1osS0FBSyxDQUFDLE1BQXNCLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDN0QsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsT0FBTyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDL0QsT0FBTyxLQUFLLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUM5QixDQUFDO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO3VHQWhGVSx1QkFBdUI7MkZBQXZCLHVCQUF1Qiw2WUNuQnBDLGd4REFvREEscWtCRHJDWSxZQUFZOzsyRkFJWCx1QkFBdUI7a0JBUG5DLFNBQVM7K0JBQ0UsbUJBQW1CLGNBQ2pCLElBQUksV0FDUCxDQUFDLFlBQVksQ0FBQzs4QkFLYixhQUFhO3NCQUF0QixNQUFNO2dCQUNxQyxLQUFLO3NCQUFoRCxLQUFLOztzQkFBSSxXQUFXO3VCQUFDLG9CQUFvQjtnQkFDUSxVQUFVO3NCQUEzRCxLQUFLOztzQkFBSSxXQUFXO3VCQUFDLDBCQUEwQjtnQkFFTCxJQUFJO3NCQUE5QyxLQUFLOztzQkFBSSxXQUFXO3VCQUFDLG1CQUFtQjtnQkFDaEMsTUFBTTtzQkFBZCxLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncm0tbmctc3Rhci1yYXRpbmcnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3JtLW5nLXN0YXItcmF0aW5nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcm0tbmctc3Rhci1yYXRpbmcuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBSbU5nU3RhclJhdGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBPdXRwdXQoKSByYXRpbmdVcGRhdGVkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdzdHlsZS4tLXN0YXItY29sb3InKSBjb2xvcjogc3RyaW5nID0gJ2dvbGQnO1xuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ3N0eWxlLi0tc3Rhci1lbXB0eS1jb2xvcicpIGVtcHR5Q29sb3I6IHN0cmluZyA9XG4gICAgJ2xpZ2h0Z3JheSc7XG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZygnc3R5bGUuLS1zdGFyLXNpemUnKSBzaXplOiBzdHJpbmcgPSAnNDBweCc7XG4gIEBJbnB1dCgpIHJhdGluZzogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgc3RhckNvdW50OiBudW1iZXIgPSA1O1xuICBASW5wdXQoKSByZWFkT25seTogYm9vbGVhbiA9IGZhbHNlO1xuICAvLyBpdCBpcyBmb3Igc2hvd2luZyBwb2ludGluZyByYXRpaW5nXG4gIC8vIEBJbnB1dCgpIGRlY2ltYWxSYXR0aW5nOiBib29sZWFuID0gZmFsc2U7XG4gIC8vIEBWaWV3Q2hpbGQoJ3Rvb2x0aXAnLCB7c3RhdGljOiBmYWxzZX0pIHRvb2x0aXAhOiBFbGVtZW50UmVmO1xuXG4gIGhvdmVyZWQ6IG51bWJlciA9IDA7XG4gIGhvdmVyZWRSYXRpbmc6IG51bWJlciA9IDA7XG4gIHN0YXJzQXJyYXk6IGFueVtdID0gW107XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdGFyc0FycmF5ID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5zdGFyQ291bnQgfSk7XG4gIH1cblxuICBvbk1vdXNlRW50ZXIoaW5kZXg6IG51bWJlciwgZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucmVhZE9ubHkpIHtcbiAgICAgIHRoaXMuaG92ZXJlZCA9IGluZGV4O1xuICAgICAgdGhpcy5ob3ZlcmVkUmF0aW5nID0gaW5kZXg7XG4gICAgICAvLyBpdCBpcyBmb3Igc2hvd2luZyBwb2ludGluZyByYXRpaW5nXG4gICAgICAvLyB0aGlzLmhvdmVyZWRSYXRpbmcgPSB0aGlzLmNhbGN1bGF0ZVJhdGluZyhpbmRleCwgZXZlbnQpO1xuICAgICAgLy8gY29uc3QgdG9vbHRpcEVsZW1lbnQgPSB0aGlzLnRvb2x0aXAubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIC8vIHRvb2x0aXBFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgLy8gdGhpcy5wb3NpdGlvblRvb2x0aXAoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VMZWF2ZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucmVhZE9ubHkpIHtcbiAgICAgIHRoaXMuaG92ZXJlZCA9IDA7XG4gICAgICB0aGlzLmhvdmVyZWRSYXRpbmcgPSAwO1xuICAgICAgLy8gY29uc3QgdG9vbHRpcEVsZW1lbnQgPSB0aGlzLnRvb2x0aXAubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIC8vIHRvb2x0aXBFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9XG5cbiAgb25DbGljayhpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnJlYWRPbmx5KSB7XG4gICAgICB0aGlzLnJhdGluZyA9IGluZGV4O1xuICAgICAgLy8gaXQgaXMgZm9yIHNob3dpbmcgcG9pbnRpbmcgcmF0aWluZ1xuICAgICAgLy8gdGhpcy5yYXRpbmcgPSB0aGlzLmNhbGN1bGF0ZVJhdGluZyhpbmRleCk7XG4gICAgICB0aGlzLnJhdGluZ1VwZGF0ZWQuZW1pdCh0aGlzLnJhdGluZyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0U3RhckNsYXNzKGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmhvdmVyZWQgPj0gaW5kZXggfHwgdGhpcy5yYXRpbmcgPj0gaW5kZXhcbiAgICAgID8gJ3N0YXItZmlsbGVkJ1xuICAgICAgOiAnc3Rhci1lbXB0eSc7XG4gIH1cblxuICAvLyBpdCBpcyBmb3Igc2hvd2luZyBwb2ludGluZyByYXRpaW5nXG4gIC8vIGdldFN0YXJDbGFzcyhpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcbiAgLy8gICBpZiAodGhpcy5ob3ZlcmVkID49IGluZGV4IHx8IHRoaXMucmF0aW5nID49IGluZGV4KSB7XG4gIC8vICAgICBjb25zdCBmdWxsU3RhcnMgPSBNYXRoLmZsb29yKHRoaXMucmF0aW5nKTtcbiAgLy8gICAgIGNvbnN0IGZyYWN0aW9uYWxQYXJ0ID0gdGhpcy5yYXRpbmcgLSBmdWxsU3RhcnM7XG4gIC8vICAgICBpZiAoaW5kZXggPT09IGZ1bGxTdGFycyArIDEgJiYgZnJhY3Rpb25hbFBhcnQgPiAwKSB7XG4gIC8vICAgICAgIHJldHVybiAnc3Rhci1oYWxmLWZpbGxlZCc7XG4gIC8vICAgICB9XG4gIC8vICAgICByZXR1cm4gJ3N0YXItZmlsbGVkJztcbiAgLy8gICB9XG4gIC8vICAgcmV0dXJuICdzdGFyLWVtcHR5JztcbiAgLy8gfVxuXG4gIGNhbGN1bGF0ZVJhdGluZyhpbmRleDogbnVtYmVyLCBldmVudD86IE1vdXNlRXZlbnQpOiBudW1iZXIge1xuICAgIGlmIChldmVudCkge1xuICAgICAgY29uc3Qgc3RhcldpZHRoID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkub2Zmc2V0V2lkdGg7XG4gICAgICBjb25zdCBvZmZzZXRYID1cbiAgICAgICAgZXZlbnQuY2xpZW50WCAtXG4gICAgICAgIChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgICBjb25zdCBmcmFjdGlvbiA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIG9mZnNldFggLyBzdGFyV2lkdGgpKTtcbiAgICAgIHJldHVybiBpbmRleCAtIDEgKyBmcmFjdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgLy8gcG9zaXRpb25Ub29sdGlwKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gIC8vICAgY29uc3QgdG9vbHRpcEVsZW1lbnQgPSB0aGlzLnRvb2x0aXAubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgLy8gICBjb25zdCB4T2Zmc2V0ID0gLTEwOyAvLyBEaXN0YW5jZSBmcm9tIHRoZSBzdGFyIHRvIHRoZSB0b29sdGlwXG4gIC8vICAgY29uc3QgeU9mZnNldCA9IC0zMDsgLy8gUG9zaXRpb24gYWJvdmUgdGhlIHN0YXJcbiAgLy9cbiAgLy8gICB0b29sdGlwRWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7ZXZlbnQuY2xpZW50WCArIHhPZmZzZXR9cHhgO1xuICAvLyAgIHRvb2x0aXBFbGVtZW50LnN0eWxlLnRvcCA9IGAke2V2ZW50LmNsaWVudFkgKyB5T2Zmc2V0fXB4YDtcbiAgLy8gfVxufVxuIiwiPCEtLTxkaXYgY2xhc3M9XCJzdGFyLXJhdGluZ1wiIFtuZ1N0eWxlXT1cInsnZm9udC1zaXplLnB4Jzogc2l6ZX1cIj4tLT5cbjwhLS0gIDxzcGFuICpuZ0Zvcj1cImxldCBzdGFyIG9mIFtdLmNvbnN0cnVjdG9yKHN0YXJDb3VudCk7IGxldCBpID0gaW5kZXhcIi0tPlxuPCEtLSAgICAgICAgY2xhc3M9XCJzdGFyXCItLT5cbjwhLS0gICAgICAgIFtuZ0NsYXNzXT1cImdldFN0YXJDbGFzcyhpICsgMSlcIi0tPlxuPCEtLSAgICAgICAgKG1vdXNlZW50ZXIpPVwib25Nb3VzZUVudGVyKGkgKyAxKVwiLS0+XG48IS0tICAgICAgICAobW91c2VsZWF2ZSk9XCJvbk1vdXNlTGVhdmUoKVwiLS0+XG48IS0tICAgICAgICAoY2xpY2spPVwib25DbGljayhpICsgMSlcIj4tLT5cbjwhLS0gICAgIOKYhS0tPlxuPCEtLSAgPC9zcGFuPi0tPlxuPCEtLTwvZGl2Pi0tPlxuXG48IS0tPGRpdiBjbGFzcz1cInN0YXItcmF0aW5nLWNvbnRhaW5lclwiPi0tPlxuPCEtLSAgPGRpdiBjbGFzcz1cInN0YXItcmF0aW5nXCIgW25nU3R5bGVdPVwieydmb250LXNpemUucHgnOiBzaXplfVwiPi0tPlxuPCEtLSAgICA8c3BhbiAqbmdGb3I9XCJsZXQgc3RhciBvZiBzdGFyc0FycmF5OyBsZXQgaSA9IGluZGV4XCItLT5cbjwhLS0gICAgICAgICAgY2xhc3M9XCJzdGFyLXdyYXBwZXJcIi0tPlxuPCEtLSAgICAgICAgICAobW91c2VlbnRlcik9XCJvbk1vdXNlRW50ZXIoaSArIDEsICRldmVudClcIi0tPlxuPCEtLSAgICAgICAgICAobW91c2VsZWF2ZSk9XCJvbk1vdXNlTGVhdmUoKVwiPi0tPlxuPCEtLSAgICAgIDxzcGFuIGNsYXNzPVwic3RhclwiLS0+XG48IS0tICAgICAgICAgICAgW25nQ2xhc3NdPVwiZ2V0U3RhckNsYXNzKGkgKyAxKVwiLS0+XG48IS0tICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2soaSArIDEpXCI+LS0+XG48IS0tICAgICAgICDimIUtLT5cbjwhLS0gICAgICA8L3NwYW4+LS0+XG48IS0tICAgICAgJmx0OyEmbmRhc2g7IFRvb2x0aXAgZGlzcGxheWVkIGFib3ZlIHRoZSBzdGFyICZuZGFzaDsmZ3Q7LS0+XG48IS0tICAgICAgPGRpdiBjbGFzcz1cInRvb2x0aXBcIiAjdG9vbHRpcD4tLT5cbjwhLS0gICAgICAgIHt7IGhvdmVyZWRSYXRpbmcgfX0tLT5cbjwhLS0gICAgICA8L2Rpdj4tLT5cbjwhLS0gICAgPC9zcGFuPi0tPlxuPCEtLSAgPC9kaXY+LS0+XG48IS0tPC9kaXY+LS0+XG5cbjxkaXYgY2xhc3M9XCJzdGFyLXJhdGluZy1jb250YWluZXJcIj5cbiAgPGRpdiBjbGFzcz1cInN0YXItcmF0aW5nXCIgW25nU3R5bGVdPVwieyAnZm9udC1zaXplLnB4Jzogc2l6ZSB9XCI+XG4gICAgPHNwYW5cbiAgICAgICpuZ0Zvcj1cImxldCBzdGFyIG9mIHN0YXJzQXJyYXk7IGxldCBpID0gaW5kZXhcIlxuICAgICAgY2xhc3M9XCJzdGFyLXdyYXBwZXJcIlxuICAgICAgKG1vdXNlZW50ZXIpPVwib25Nb3VzZUVudGVyKGkgKyAxLCAkZXZlbnQpXCJcbiAgICAgIChtb3VzZWxlYXZlKT1cIm9uTW91c2VMZWF2ZSgpXCJcbiAgICA+XG4gICAgICA8c3BhblxuICAgICAgICBjbGFzcz1cInN0YXJcIlxuICAgICAgICBbbmdDbGFzc109XCJnZXRTdGFyQ2xhc3MoaSArIDEpXCJcbiAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2soaSArIDEpXCJcbiAgICAgID5cbiAgICAgICAg4piFXG4gICAgICA8L3NwYW4+XG4gICAgPC9zcGFuPlxuICA8L2Rpdj5cbiAgPCEtLSBUb29sdGlwIGVsZW1lbnQgLS0+XG4gIDwhLS0gIDxkaXYgY2xhc3M9XCJ0b29sdGlwXCIgI3Rvb2x0aXA+LS0+XG4gIDwhLS0gICAge3sgaG92ZXJlZFJhdGluZyB9fS0tPlxuICA8IS0tICA8L2Rpdj4tLT5cbjwvZGl2PlxuIl19