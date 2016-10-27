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
    private currentState: SpeakerRegistrationState = Object.assign({}, this.defaultState);
    private _state$ = new BehaviorSubject<SpeakerRegistrationState>(this.currentState);

    constructor() {
    }

    get state$(){
        return this._state$;
    }

    setPersonalDetails(personal: SpeakerRegistrationPersonal) {
        this.currentState.personal = personal;
        this._state$.next(this.currentState);
    }

    setSessionDetails(session: SpeakerRegistrationSession) {
        this.currentState.session = session;
        this._state$.next(this.currentState);
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
        this.currentState = Object.assign({}, this.defaultState);
        console.log(this.currentState);
        this._state$.next(this.currentState);
    }

}
