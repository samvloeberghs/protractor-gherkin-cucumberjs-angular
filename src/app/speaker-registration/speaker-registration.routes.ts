import { Routes } from '@angular/router';

import { SpeakerRegistrationStepOneComponent } from './speaker-registration-step-one';
import { SpeakerRegistrationStepTwoComponent } from './speaker-registration-step-two';
import { SpeakerRegistrationStepThreeComponent } from './speaker-registration-step-three';

export const ROUTES: Routes = [
    {path: 'speaker-registration', component: SpeakerRegistrationStepOneComponent},
    {path: 'speaker-registration/step-1', component: SpeakerRegistrationStepOneComponent},
    {path: 'speaker-registration/step-2', component: SpeakerRegistrationStepTwoComponent},
    {path: 'speaker-registration/step-3', component: SpeakerRegistrationStepThreeComponent},
];
