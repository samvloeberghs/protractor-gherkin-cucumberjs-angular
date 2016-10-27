import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

export interface SpeakerRegistrationPersonal{
    name: string;
    email: string;
    description: string;
}

export interface SpeakerRegistrationSession{
    type: string;
    title: string;
    description: string;
}

export interface SpeakerRegistrationState {
    personal: SpeakerRegistrationPersonal;
    session: SpeakerRegistrationSession
}

@Injectable()
export class SpeakerRegistrationStateService {

    private currentState:SpeakerRegistrationState = {
        personal: {
            name: '',
            email: '',
            description: ''
        },
        session: {
            type: '',
            title: '',
            description: ''
        }
    };
    state$ = new BehaviorSubject<SpeakerRegistrationState>(this.currentState);

    constructor() {

    }

    setPersonalDetails(personal: SpeakerRegistrationPersonal) {
        this.currentState.personal = personal;
        this.state$.next(this.currentState);
    }

    setSessionDetails(session: SpeakerRegistrationSession){
        this.currentState.session = session;
        this.state$.next(this.currentState);

    }

}
