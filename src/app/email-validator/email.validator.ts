import {FormControl} from "@angular/forms";

export class EmailValidator {
  static validEmail(control: FormControl) {
    let value = control.value;
    /* tslint:disable */
    const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    /* tslint:enable */
    if (value.length <= 5 || !EMAIL_REGEXP.test(control.value)) {
      return {
        invalidEmail: true
      };
    }
    return null;
  }
}
