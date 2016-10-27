import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'sv-speaker-registration-step-two',
  providers: [],
  styles: [require('./speaker-registration-step-two.component.scss')],
  template: require('./speaker-registration-step-two.component.html')
})
export class SpeakerRegistrationStepTwoComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {


  }

  submit(event: any) {

    this.submitted = true;

    if (this.form.valid) {
      console.log(this.form.value);
    }
    event.preventDefault();

  }

}
