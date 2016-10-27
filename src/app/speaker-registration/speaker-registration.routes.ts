import { Routes } from '@angular/router';

import { SpeakerRegistrationStepOneComponent } from './speaker-registration-step-one';
import { SpeakerRegistrationStepTwoComponent, StepTwoGuard } from './speaker-registration-step-two';
import { SpeakerRegistrationStepThreeComponent, StepThreeGuard } from './speaker-registration-step-three';


export const ROUTES: Routes = [
    {
        path: 'speaker-registration', component: SpeakerRegistrationStepOneComponent,
        children: [
            {
                path: 'step-1',
                component: SpeakerRegistrationStepOneComponent
            },
            {
                path: 'step-2',
                component: SpeakerRegistrationStepTwoComponent,
                canActivate: [StepTwoGuard]
            },
            {
                path: 'step-3',
                component: SpeakerRegistrationStepThreeComponent,
                canActivate: [StepThreeGuard]
            }
        ]
    }
];
