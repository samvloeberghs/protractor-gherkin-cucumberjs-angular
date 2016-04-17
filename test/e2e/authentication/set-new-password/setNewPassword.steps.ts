let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

import {SetNewPasswordPageObject} from './setNewPassword.page';

module.exports = function () {


  let setNewPasswordPageObject = new SetNewPasswordPageObject();

  // the id & nonce in the set new password link
  let currentId;
  let currentNonce;

  /*
   this.Then(/^the register form is validated '(.*)'$/, function (valid, callback) {
   valid = valid === 'true';
   expect(registerPageObject.hasErrorMessages()).to.become(valid).and.notify(callback);
   });
   */

  this.setDefaultTimeout(60 * 1000);
  

  this.Given(/^'(.*)' is the provided nonce in the email link$/, (nonce, callback) => {
    currentNonce = nonce;
    callback();
  });
  this.Given(/^'(.*)' is the id representing the user in the email link$/, (id, callback) => {
    currentId = id;
    callback();
  });

  this.When(/^using the link to the set new password page$/, (callback) => {
    setNewPasswordPageObject.getPage(currentId, currentNonce);
    callback();
  });

  this.Then(/^the set new password request is validated '(.*)'$/, (valid, callback) => {
    valid = valid === 'true';
    currentId = undefined;
    currentNonce = undefined;
    //expect(setNewPasswordPageObject.hasFormElements()).to.become(!valid);
    expect(setNewPasswordPageObject.hasAlertMessages()).to.become(!valid).and.notify(callback);
  });

  ///
  // ***
  ///

  this.Given(/^user clicks the valid set new password link$/, (callback) => {
    setNewPasswordPageObject.getPage('1', '123');
    expect(setNewPasswordPageObject.hasFormElements()).to.become(true).and.notify(callback);
    // callback();
  });
  this.Given(/^'(.*)' is the provided new password in the set new password form$/, (password, callback) => {
    setNewPasswordPageObject.setPassword(password);
    callback();
  });
  this.Given(/^'(.*)' is the repeated new password in the set new password form$/, (repeatPassword, callback) => {
    setNewPasswordPageObject.setRepeatPassword(repeatPassword);
    callback();
  });


  this.When(/^submitting the set new password form$/, (callback) => {
    setNewPasswordPageObject.submitForm();
    callback();
  });

  this.Then(/^the set new password form is validated '(.*)'$/, (valid, callback) => {
    valid = valid === 'true';
    expect(setNewPasswordPageObject.formIsValid()).to.become(valid).and.notify(callback);
  });


};
