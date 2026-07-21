import * as i0 from '@angular/core';
import { input, output, signal, computed, ChangeDetectionStrategy, Component } from '@angular/core';

class RmNgStarRatingComponent {
    // Inputs (signal-based)
    color = input('gold', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "color" }] : /* istanbul ignore next */ []));
    emptyColor = input('lightgray', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "emptyColor" }] : /* istanbul ignore next */ []));
    size = input('40px', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "size" }] : /* istanbul ignore next */ []));
    rating = input(0, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "rating" }] : /* istanbul ignore next */ []));
    starCount = input(5, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "starCount" }] : /* istanbul ignore next */ []));
    readOnly = input(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "readOnly" }] : /* istanbul ignore next */ []));
    allowHalf = input(true, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "allowHalf" }] : /* istanbul ignore next */ []));
    // Output (signal-based)
    ratingUpdated = output();
    // Internal state
    hovered = signal(0, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "hovered" }] : /* istanbul ignore next */ []));
    hoveredRating = signal(0, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "hoveredRating" }] : /* istanbul ignore next */ []));
    starsArray = computed(() => Array.from({ length: this.starCount() }), /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "starsArray" }] : /* istanbul ignore next */ []));
    onMouseEnter(index, event) {
        if (this.readOnly()) {
            return;
        }
        if (this.allowHalf()) {
            this.hoveredRating.set(this.calculateRating(index, event));
        }
        else {
            this.hoveredRating.set(index);
        }
        this.hovered.set(index);
    }
    onMouseLeave() {
        if (this.readOnly()) {
            return;
        }
        this.hovered.set(0);
        this.hoveredRating.set(0);
    }
    onClick(index, event) {
        if (this.readOnly()) {
            return;
        }
        const newRating = this.allowHalf() && event
            ? this.calculateRating(index, event)
            : index;
        this.ratingUpdated.emit(newRating);
    }
    getStarClass(index) {
        const value = this.hoveredRating() || this.rating();
        if (value >= index) {
            return 'star-filled';
        }
        if (this.allowHalf() && value + 0.5 >= index) {
            return 'star-half-filled';
        }
        return 'star-empty';
    }
    calculateRating(index, event) {
        if (!event) {
            return index;
        }
        const starElement = event.target;
        const { left, width } = starElement.getBoundingClientRect();
        const x = event.clientX - left;
        return x < width / 2 ? index - 0.5 : index;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.0.2", ngImport: i0, type: RmNgStarRatingComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "22.0.2", type: RmNgStarRatingComponent, isStandalone: true, selector: "rm-ng-star-rating", inputs: { color: { classPropertyName: "color", publicName: "color", isSignal: true, isRequired: false, transformFunction: null }, emptyColor: { classPropertyName: "emptyColor", publicName: "emptyColor", isSignal: true, isRequired: false, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, rating: { classPropertyName: "rating", publicName: "rating", isSignal: true, isRequired: false, transformFunction: null }, starCount: { classPropertyName: "starCount", publicName: "starCount", isSignal: true, isRequired: false, transformFunction: null }, readOnly: { classPropertyName: "readOnly", publicName: "readOnly", isSignal: true, isRequired: false, transformFunction: null }, allowHalf: { classPropertyName: "allowHalf", publicName: "allowHalf", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { ratingUpdated: "ratingUpdated" }, host: { properties: { "style.--star-color": "color()", "style.--star-empty-color": "emptyColor()", "style.--star-size": "size()" } }, ngImport: i0, template: "<div class=\"star-rating-container\">\r\n  <div class=\"star-rating\" [style.font-size.px]=\"size()\">\r\n    @for (star of starsArray(); track i; let i = $index) {\r\n      <span\r\n        class=\"star-wrapper\"\r\n        (mouseenter)=\"onMouseEnter(i + 1, $event)\"\r\n        (mousemove)=\"allowHalf() ? onMouseEnter(i + 1, $event) : null\"\r\n        (mouseleave)=\"onMouseLeave()\"\r\n      >\r\n        <span\r\n          class=\"star\"\r\n          [class]=\"getStarClass(i + 1)\"\r\n          (click)=\"onClick(i + 1, $event)\"\r\n        >\r\n          \u2605\r\n        </span>\r\n      </span>\r\n    }\r\n  </div>\r\n</div>\r\n", styles: [":host{--star-size: 24px;--star-color: gold;--star-empty-color: lightgray}.star-rating{display:flex;cursor:pointer;-webkit-user-select:none;user-select:none}.star{font-size:var(--star-size);transition:color .2s}.star-filled{color:var(--star-color)}.star-empty{color:var(--star-empty-color)}.star-half-filled{position:relative;color:var(--star-empty-color)}.star-half-filled:before{content:\"\\2605\";position:absolute;left:0;width:50%;overflow:hidden;color:var(--star-color)}.star-rating-container{display:inline-block;position:relative}.tooltip{position:absolute;background-color:#000;color:#fff;padding:2px 6px;border-radius:4px;font-size:12px;white-space:nowrap;display:none;pointer-events:none;z-index:1}\n"], changeDetection: i0.ChangeDetectionStrategy.Eager });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.0.2", ngImport: i0, type: RmNgStarRatingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'rm-ng-star-rating', changeDetection: ChangeDetectionStrategy.Eager, host: {
                        '[style.--star-color]': 'color()',
                        '[style.--star-empty-color]': 'emptyColor()',
                        '[style.--star-size]': 'size()',
                    }, template: "<div class=\"star-rating-container\">\r\n  <div class=\"star-rating\" [style.font-size.px]=\"size()\">\r\n    @for (star of starsArray(); track i; let i = $index) {\r\n      <span\r\n        class=\"star-wrapper\"\r\n        (mouseenter)=\"onMouseEnter(i + 1, $event)\"\r\n        (mousemove)=\"allowHalf() ? onMouseEnter(i + 1, $event) : null\"\r\n        (mouseleave)=\"onMouseLeave()\"\r\n      >\r\n        <span\r\n          class=\"star\"\r\n          [class]=\"getStarClass(i + 1)\"\r\n          (click)=\"onClick(i + 1, $event)\"\r\n        >\r\n          \u2605\r\n        </span>\r\n      </span>\r\n    }\r\n  </div>\r\n</div>\r\n", styles: [":host{--star-size: 24px;--star-color: gold;--star-empty-color: lightgray}.star-rating{display:flex;cursor:pointer;-webkit-user-select:none;user-select:none}.star{font-size:var(--star-size);transition:color .2s}.star-filled{color:var(--star-color)}.star-empty{color:var(--star-empty-color)}.star-half-filled{position:relative;color:var(--star-empty-color)}.star-half-filled:before{content:\"\\2605\";position:absolute;left:0;width:50%;overflow:hidden;color:var(--star-color)}.star-rating-container{display:inline-block;position:relative}.tooltip{position:absolute;background-color:#000;color:#fff;padding:2px 6px;border-radius:4px;font-size:12px;white-space:nowrap;display:none;pointer-events:none;z-index:1}\n"] }]
        }], propDecorators: { color: [{ type: i0.Input, args: [{ isSignal: true, alias: "color", required: false }] }], emptyColor: [{ type: i0.Input, args: [{ isSignal: true, alias: "emptyColor", required: false }] }], size: [{ type: i0.Input, args: [{ isSignal: true, alias: "size", required: false }] }], rating: [{ type: i0.Input, args: [{ isSignal: true, alias: "rating", required: false }] }], starCount: [{ type: i0.Input, args: [{ isSignal: true, alias: "starCount", required: false }] }], readOnly: [{ type: i0.Input, args: [{ isSignal: true, alias: "readOnly", required: false }] }], allowHalf: [{ type: i0.Input, args: [{ isSignal: true, alias: "allowHalf", required: false }] }], ratingUpdated: [{ type: i0.Output, args: ["ratingUpdated"] }] } });

/*
 * Public API Surface of rm-ng-star-rating
 */

/**
 * Generated bundle index. Do not edit.
 */

export { RmNgStarRatingComponent };
//# sourceMappingURL=rm-ng-star-rating.mjs.map
