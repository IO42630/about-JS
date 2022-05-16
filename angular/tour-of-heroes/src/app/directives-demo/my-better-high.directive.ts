import {
    Directive, Renderer2, OnInit, ElementRef,
    HostListener, HostBinding, Input
} from '@angular/core';

@Directive({
    selector: '[appMyBetterHigh]'
})
export class MyBetterHighDirective implements OnInit {

    @Input()
    defaultColor = 'transparent';

    @HostBinding('style.backgroundColor') backGroundColor: string;


    @HostListener('mouseenter') mouseover(eventData: Event) {
        this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');

    }


    constructor(
        private elRef: ElementRef,
        private renderer: Renderer2
    ) { }

    ngOnInit() {
        this.backGroundColor = this.defaultColor; // wait for @Input to be init

        this.elRef.nativeElement.style.backgroundColor = 'green'; // avoid this, modifying the dom directly might cause issues
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
        this.backGroundColor = 'orange'; // another way
    }

}
