import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'sv-speaker-registration-step-two',
    providers: [],
    styles: [require('./speaker-registration-step-two.component.scss')],
    template: require('./speaker-registration-step-two.component.html')
})
export class SpeakerRegistrationStepTwoComponent implements OnInit {

    form: FormGroup;
    submitted = false;

    constructor(private fb: FormBuilder,
                private router: Router) {
    }

    ngOnInit() {

        this.form = this.fb.group({
            type: new FormControl(
                '',
                Validators.required
            ),
            title: new FormControl(
                '',
                Validators.required
            ),
            description: new FormControl(
                '',
                Validators.required
            )
        });

    }

    submit(event: any) {

        this.submitted = true;

        if (this.form.valid) {
            // store stuff
            this.router.navigate(['speaker-registration/step-3']);
        }
        event.preventDefault();

    }

    goBack(event: any){
        this.router.navigate(['speaker-registration/step-1']);
        event.preventDefault();
    }

}
