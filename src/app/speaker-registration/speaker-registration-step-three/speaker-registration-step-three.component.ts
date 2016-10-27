import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { EmailValidator } from '../../email-validator';

@Component({
    selector: 'sv-speaker-registration-step-three',
    providers: [],
    styles: [require('./speaker-registration-step-three.component.scss')],
    template: require('./speaker-registration-step-three.component.html')
})
export class SpeakerRegistrationStepThreeComponent implements OnInit {

    form: FormGroup;
    submitted = false;
    data: Object;

    constructor(private fb: FormBuilder,
                private router: Router) {

    }

    ngOnInit() {

        this.form = this.fb.group({
            name: new FormControl(
                '',
                Validators.required
            ),
            email: new FormControl(
                '',
                Validators.compose([
                    Validators.required,
                    EmailValidator.validEmail
                ])
            ),
            sessionType: new FormControl(
                '',
                Validators.required
            )
        });

    }

    submit(event: any) {

        this.submitted = true;

        if (this.form.valid) {
            // store stuff
            this.router.navigate(['speaker-registration/step-2']);
        }
        event.preventDefault();

    }

    goBackToStepOne(event: any) {
        this.router.navigate(['speaker-registration/step-1']);
        event.preventDefault();
    }

    goBackToStepTwo(event: any) {
        this.router.navigate(['speaker-registration/step-2']);
        event.preventDefault();
    }

}
