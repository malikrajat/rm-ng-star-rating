import * as _angular_core from '@angular/core';

declare class RmNgStarRatingComponent {
    readonly color: _angular_core.InputSignal<string>;
    readonly emptyColor: _angular_core.InputSignal<string>;
    readonly size: _angular_core.InputSignal<string>;
    readonly rating: _angular_core.InputSignal<number>;
    readonly starCount: _angular_core.InputSignal<number>;
    readonly readOnly: _angular_core.InputSignal<boolean>;
    readonly allowHalf: _angular_core.InputSignal<boolean>;
    readonly ratingUpdated: _angular_core.OutputEmitterRef<number>;
    private readonly hovered;
    private readonly hoveredRating;
    readonly starsArray: _angular_core.Signal<unknown[]>;
    onMouseEnter(index: number, event: MouseEvent): void;
    onMouseLeave(): void;
    onClick(index: number, event?: MouseEvent): void;
    getStarClass(index: number): string;
    private calculateRating;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<RmNgStarRatingComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<RmNgStarRatingComponent, "rm-ng-star-rating", never, { "color": { "alias": "color"; "required": false; "isSignal": true; }; "emptyColor": { "alias": "emptyColor"; "required": false; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; "rating": { "alias": "rating"; "required": false; "isSignal": true; }; "starCount": { "alias": "starCount"; "required": false; "isSignal": true; }; "readOnly": { "alias": "readOnly"; "required": false; "isSignal": true; }; "allowHalf": { "alias": "allowHalf"; "required": false; "isSignal": true; }; }, { "ratingUpdated": "ratingUpdated"; }, never, never, true, never>;
}

export { RmNgStarRatingComponent };
