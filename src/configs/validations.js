/* eslint-disable prettier/prettier */
import moment from 'moment';
import _ from 'lodash';

export const composeValidators = (...args) => (value) => {
  let error;
  _.forEach(args, (validator) => {
    const res = validator(value);
    if (res) {error = res;}
  });
  return error;
};

export const required = (value) =>
  value ? undefined : 'This field is required';
export const notEmpty = (value) =>
  !_.isEmpty(value) ? undefined : 'This field is required';
export const minImages = (min) => (value) =>
  value && value.length < min ? `Must be ${min} photos or more` : undefined;
export const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const minLength = (min) => (value) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const confirmPassword = (password) => (value) =>
  value === password ? undefined : 'Password does not match';
export const maxNumber = (max) => (value) =>
  _.toNumber(value) > max ? `Must be ${max} or less` : undefined;
export const minNumber = (min) => (value) =>
  _.toNumber(value) < min ? `Must be ${min} or more` : undefined;
export const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;
export const alphaNumeric = (value) =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined;
export const number = (value) =>
  value && /[^0-9 ]/i.test(value) ? 'Only numeric characters' : undefined;
export const validDate = (value) => {
  const date = moment(value);
  return date.isValid() ? undefined : 'Invalid date';
};
export const noWhiteSpace = (value) =>
  value && /\s/.test(value) ? 'White space is not allowed' : undefined;
export const noAlphabetic = (value) =>
  value && /[a-z]/i.test(value)
    ? 'Alphabetic character is not allowed'
    : undefined;
export const isNumeric = (value) =>
  !isNaN(value) &&
  typeof value !== 'object' &&
  value !== Number.POSITIVE_INFINITY &&
  value !== Number.NEGATIVE_INFINITY
    ? undefined
    : 'Only numeric';
