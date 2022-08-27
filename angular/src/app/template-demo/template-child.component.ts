import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ContentChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-template-child',
    template: `
        <div class="border border-info m-4">
            <p class="text-info">app-template-child</p>
            <span>someLocalReference</span>
            <p #someLocalReference>{{someInput}}</p>
            <span>localContentReference</span>
            <ng-content #localContentReference></ng-content>
        </div>
    `
})
export class TemplateChildComponent implements
    OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked, OnDestroy
{

    @Input()
    someInput: string;

    @ViewChild('someLocalReference', { static: true })
    someStaticElement: ElementRef;

    @ViewChild('someLocalReference')
    someElement: ElementRef;

    @ContentChild('localContentReference', { static: true })
    someStaticContent: ElementRef;

    @ContentChild('localContentReference')
    someContent: ElementRef;


    constructor() { console.log('constructor'); }

    ngOnChanges(changes: SimpleChanges): void { this.print(['ngOnChanges', changes]); }

    ngOnInit(): void {
        // ViewChild must be static to be usable here.
        this.print(['ngOnInit']);
    }

    ngDoCheck(): void { this.print(['ngDoCheck']); }

    ngAfterContentInit(): void { this.print(['ngAfterContentInit']); }

    ngAfterContentChecked(): void { this.print(['ngAfterContentChecked']); }

    ngAfterViewInit(): void {
        const ele = this.someElement.nativeElement;
        // do not use local reference for modifying element, use directives for that
        if (ele instanceof HTMLInputElement) {
            console.log(ele.value);
        }
        this.print(['ngAfterViewInit']);
    }

    ngAfterViewChecked(): void { this.print(['ngAfterViewChecked']); }

    ngOnDestroy(): void { this.print(['ngOnDestroy']); }

    print(where: any[]) {
        const arr = [
            this.someStaticElement,
            this.someElement,
            this.someStaticContent,
            this.someContent
        ];
        console.log(where, arr);
    }

}
