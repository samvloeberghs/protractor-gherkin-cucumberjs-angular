import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ROUTES, SpeakerRegistrationService } from './';
import { SpeakerRegistrationStepOneComponent } from './speaker-registration-step-one';
import { SpeakerRegistrationStepTwoComponent } from './speaker-registration-step-two';
import { SpeakerRegistrationStepThreeComponent } from './speaker-registration-step-three';

const APP_PROVIDERS = [
    SpeakerRegistrationService
];

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(ROUTES, {useHash: false})
    ],
    declarations: [
        SpeakerRegistrationStepOneComponent,
        SpeakerRegistrationStepTwoComponent,
        SpeakerRegistrationStepThreeComponent
    ],
    providers: [
        APP_PROVIDERS
    ]
})
export class SpeakerRegistrationModule {

}
