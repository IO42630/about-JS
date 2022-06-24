import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

export enum Questions {
    pet,
    fruit
}

@Component({
    selector: 'app-forms-demo',
    templateUrl: 'forms-demo.component.html',
    styles: []
})
export class FormsDemoComponent implements OnInit {

    @ViewChild('form')
    form: NgForm;

    defaultQuestion = 'pet';
    answer = '';
    fruit = ['apple', 'banana', 'melon'];

    constructor() { }

    ngOnInit(): void {
    }

    /**
     * Structure must match.
     */
    setFormValue() {
        this.form.setValue({
            userData: {
                username: 'user',
                email: '',
            },
            secret: 'pet',
            questionAnswer: '',
            fruit: 'apple'
        });
    }

    patchFormValue() {
        this.form.form.patchValue({userData: {username: 'patchUser'}});
    }

    onSubmitFormElement(form: HTMLFormElement) {
        console.log(form);
    }

    onSubmitForm(form: NgForm) {
        console.log(form);
    }

    onSubmitFormViewChild() {
        console.log(this.form);
        console.log(this.form.value.username);
        this.form.reset();
    }
    
}
