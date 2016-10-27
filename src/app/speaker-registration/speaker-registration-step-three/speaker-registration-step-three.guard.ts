import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { SpeakerRegistrationService } from '../speaker-registration.service';

@Injectable()
export class StepThreeGuard implements CanActivate {

    constructor(private speakerRegistrationService: SpeakerRegistrationService) {

    }

    canActivate() {
        if (!(this.speakerRegistrationService.validatePersonalDetails()
            && this.speakerRegistrationService.validateSessionDetails())) {
            alert('First complete the personal & session details!');
        }
        return this.speakerRegistrationService.validatePersonalDetails()
            && this.speakerRegistrationService.validateSessionDetails()
    }

}