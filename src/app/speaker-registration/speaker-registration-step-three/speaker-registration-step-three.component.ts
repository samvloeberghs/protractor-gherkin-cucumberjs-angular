import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { SpeakerRegistrationService, SpeakerRegistrationState } from '../speaker-registration.service';

@Component({
    selector: 'sv-speaker-registration-step-three',
    providers: [],
    styles: [require('./speaker-registration-step-three.component.scss')],
    template: require('./speaker-registration-step-three.component.html')
})
export class SpeakerRegistrationStepThreeComponent implements OnInit {

    data$: Observable<SpeakerRegistrationState>;
    validated: boolean = false;

    constructor(private router: Router,
                private speakerRegistrationService: SpeakerRegistrationService) {

        this.data$ = this.speakerRegistrationService.state$.asObservable();
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
