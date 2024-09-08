////////// PERSONAL INFORMATION //////////

/**
 * @description email regex
 */
export const REGEX_EMAIL =
  /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;

/**
 * @description phone number regex
 */
export const REGEX_PHONE_NUMBER = /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/;

/**
 * @description regex resident registration number
 */

export const REGEX_RESIDENT_REGISTRATION_NUMBER =
  /^[-A-Za-z0-9_]+[-A-Za-z0-9_.][@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.][.]{1}[A-Za-z]{1,5}$/;
