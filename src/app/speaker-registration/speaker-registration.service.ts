import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

export interface SpeakerRegistrationPersonal {
    name: string;
    email: string;
    description: string;
}

export interface SpeakerRegistrationSession {
    type: string;
    title: string;
    description: string;
}

export interface SpeakerRegistrationState {
    personal: SpeakerRegistrationPersonal;
    session: SpeakerRegistrationSession
}

@Injectable()
export class SpeakerRegistrationService {

    state$ = new BehaviorSubject<SpeakerRegistrationState>(this.currentState);
    private defaultState: SpeakerRegistrationState = {
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
    private currentState: SpeakerRegistrationState = this.defaultState;

    constructor() {
    }

    setPersonalDetails(personal: SpeakerRegistrationPersonal) {
        this.currentState.personal = personal;
        this.state$.next(this.currentState);
    }

    setSessionDetails(session: SpeakerRegistrationSession) {
        this.currentState.session = session;
        this.state$.next(this.currentState);
    }

    validatePersonalDetails(): boolean {
        return this.currentState.personal.name === ''
            || this.currentState.personal.email === ''
            || this.currentState.personal.description === '';
    }

    validateSessionDetails(): boolean {
        return this.currentState.session.type === ''
            || this.currentState.session.title === ''
            || this.currentState.personal.description === '';
    }

    resetState() {
        this.currentState = this.defaultState;
        this.state$.next(this.currentState);
    }

}
