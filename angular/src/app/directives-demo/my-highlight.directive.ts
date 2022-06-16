import { Directive, ElementRef, OnInit, Input } from '@angular/core';


@Directive({
    selector: '[appMyHighlight]'
})
export class MyHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef) {

    }

    @Input('appMyHighlight') // this is an alias to make it callable as [appMyBetterHigh]=""
    defaultColor: string;


    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = this.defaultColor;
    }

}
