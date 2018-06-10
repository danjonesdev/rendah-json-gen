import { expect } from 'chai';

import { validateEmail } from '../src/static/scripts/functions/validateEmail';

describe('validateEmail(str)', () => {
  it('a valid email address should return true', () => {
    expect(validateEmail('jonathon@mosquito-digital.co.uk')).to.equal(true);
  });

  it('an invalid email address should return false', () => {
    expect(validateEmail('jonathon@mosquito')).to.equal(false);
  });

  it('empty value should return false', () => {
    expect(validateEmail()).to.equal(false);
  });
});
