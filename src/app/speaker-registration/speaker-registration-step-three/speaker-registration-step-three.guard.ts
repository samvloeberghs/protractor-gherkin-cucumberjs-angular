import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { SpeakerRegistrationService } from '../speaker-registration.service';

@Injectable()
export class StepThreeGuard implements CanActivate {

    constructor(private speakerRegistrationService: SpeakerRegistrationService,
                private router: Router) {
    }

    canActivate() {

        if (!(this.speakerRegistrationService.validatePersonalDetails()
            && this.speakerRegistrationService.validateSessionDetails())) {
            alert('First complete the personal & session details!');
            this.router.navigate(['speaker-registration/step-1']);
            return false;
        }

        if (!(this.speakerRegistrationService.validateSessionDetails())) {
            alert('First complete the session details!');
            this.router.navigate(['speaker-registration/step-2']);
            return false;
        }

        return true;

    }

}