import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { SpeakerRegistrationService } from '../speaker-registration.service';

@Injectable()
export class StepTwoGuard implements CanActivate {

    constructor(private speakerRegistrationService: SpeakerRegistrationService) {

    }

    canActivate() {
        if(!this.speakerRegistrationService.validatePersonalDetails()){
            alert('First complete the personal details!');
        }
        return this.speakerRegistrationService.validatePersonalDetails();
    }

}