import {
  REGEX_EMAIL,
  REGEX_PHONE_NUMBER,
  REGEX_RESIDENT_REGISTRATION_NUMBER,
} from "./constants";

export const emailMatcher = (str) => str.match(REGEX_EMAIL);

export const phoneNumberMatcher = (str) => str.match(REGEX_PHONE_NUMBER);

export const residentRegistrationNumberMatcher = (str) =>
  str.match(REGEX_RESIDENT_REGISTRATION_NUMBER);
