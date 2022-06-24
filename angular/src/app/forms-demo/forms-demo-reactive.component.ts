import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { logging } from 'protractor';
import { log } from 'util';

@Component({
    selector: 'app-root',
    templateUrl: './forms-demo-reactive.component.html'
})
export class FormsDemoReactiveComponent implements OnInit {
    fruits = ['apple', 'banana', 'melon'];

    someForm: FormGroup;
    forbiddenUName = ['Bob', 'Nelly'];

    ngOnInit(): void {
        this.someForm = new FormGroup({
            userData: new FormGroup({
                username: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
                email: new FormControl(null, [Validators.required, Validators.email], [this.forbiddenEmails]),
            }),
            fruits: new FormControl('banana'),
            hobbies: new FormArray([])
        });
        // useful hooks
        this.someForm.valueChanges.subscribe(value => console.log(value));
        this.someForm.statusChanges.subscribe(value => console.log(value));
        // can use setValue and patchValue as in template-approach
    }

    onSubmit() {
        console.log(this.someForm);
    }

    onAddHobby() {
        const control = new FormControl(null, Validators.required);
        (this.someForm.get('hobbies') as FormArray).push(control);
    }


    forbiddenNames(control: FormControl): { [s: string]: boolean } {
        if (this.forbiddenUName.indexOf(control.value) !== -1) {
            return {nameIsForbidden: true};
        } else {
            return null;
        }
    }

    /**
     * element will have 'ng-pending' while Promise is resolving.
     */
    forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
        return new Promise<any>((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'test@test.com') {
                    return resolve({nameIsForbidden: true});
                }
                return resolve(null);
            }, 1500);
        });
    }

}
