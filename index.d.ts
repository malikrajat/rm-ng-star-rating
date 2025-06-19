import * as i0 from '@angular/core';
import { OnInit, EventEmitter } from '@angular/core';

declare class RmNgStarRatingComponent implements OnInit {
    ratingUpdated: EventEmitter<number>;
    color: string;
    emptyColor: string;
    size: string;
    rating: number;
    starCount: number;
    readOnly: boolean;
    hovered: number;
    hoveredRating: number;
    starsArray: any[];
    ngOnInit(): void;
    onMouseEnter(index: number, event: MouseEvent): void;
    onMouseLeave(): void;
    onClick(index: number): void;
    getStarClass(index: number): string;
    calculateRating(index: number, event?: MouseEvent): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<RmNgStarRatingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RmNgStarRatingComponent, "rm-ng-star-rating", never, { "color": { "alias": "color"; "required": false; }; "emptyColor": { "alias": "emptyColor"; "required": false; }; "size": { "alias": "size"; "required": false; }; "rating": { "alias": "rating"; "required": false; }; "starCount": { "alias": "starCount"; "required": false; }; "readOnly": { "alias": "readOnly"; "required": false; }; }, { "ratingUpdated": "ratingUpdated"; }, never, never, true, never>;
}

export { RmNgStarRatingComponent };
