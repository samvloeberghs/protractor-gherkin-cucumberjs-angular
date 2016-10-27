import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { SpeakerRegistrationService } from '../speaker-registration.service';

@Injectable()
export class StepTwoGuard implements CanActivate {

    constructor(private speakerRegistrationService: SpeakerRegistrationService,
                private router: Router) {
    }

    canActivate() {

        if (!this.speakerRegistrationService.validatePersonalDetails()) {
            alert('First complete the personal details!');
            this.router.navigate(['speaker-registration/step-1']);
            return false;
        }

        return true;

    }

}