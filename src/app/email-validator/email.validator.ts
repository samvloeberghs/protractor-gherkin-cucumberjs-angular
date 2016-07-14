import {Control} from '@angular/common';
interface IValidationResult {
  [key: string]: boolean;
}

export class EmailValidator {
  static validEmail(control: Control): IValidationResult {
    let value = control.value;
    /* tslint:disable */
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    /* tslint:enable */
    if (value.length <= 5 || !re.test(control.value)) {
      return {
        invalidEmail: true
      };
    }
    return null;
  }
}
