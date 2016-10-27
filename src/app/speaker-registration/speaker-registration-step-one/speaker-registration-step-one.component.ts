import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { EmailValidator } from '../../email-validator';

@Component({
    selector: 'sv-speaker-registration-step-one',
    providers: [],
    styles: [require('./speaker-registration-step-one.component.scss')],
    template: require('./speaker-registration-step-one.component.html')
})
export class SpeakerRegistrationStepOneComponent implements OnInit {

    form: FormGroup;
    submitted = false;

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
            description: new FormControl(
                '',
                Validators.required
            ),
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

}
