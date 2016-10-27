import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { EmailValidator } from '../../email-validator';
import { SpeakerRegistrationService, SpeakerRegistrationState } from '../speaker-registration.service';

@Component({
    selector: 'sv-speaker-registration-step-three',
    providers: [],
    styles: [require('./speaker-registration-step-three.component.scss')],
    template: require('./speaker-registration-step-three.component.html')
})
export class SpeakerRegistrationStepThreeComponent implements OnInit {

    data: SpeakerRegistrationState;
    validated: boolean = false;

    constructor(private router: Router,
                private speakerRegistrationService: SpeakerRegistrationService) {

        this.speakerRegistrationService.state$.subscribe(
            (data: SpeakerRegistrationState) => this.data = data
        )
    }

    ngOnInit() {

    }

    submit(event: any) {

        this.speakerRegistrationService.resetState();
        this.validated = true;
        setTimeout(() => {
            this.router.navigate(['speaker-registration']);
        }, 5000);
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
