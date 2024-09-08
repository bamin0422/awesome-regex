import {
  REGEX_EMAIL,
  REGEX_PHONE_NUMBER,
  REGEX_RESIDENT_REGISTRATION_NUMBER,
} from "./constants";

export const emailReplacer = (str, replaceText) =>
  str.replace(REGEX_EMAIL, replaceText);

export const phoneNumberReplacer = (str, replaceText) =>
  str.replace(REGEX_PHONE_NUMBER, replaceText);

export const residentRegistrationNumberReplacer = (str, replaceText) =>
  str.replace(REGEX_RESIDENT_REGISTRATION_NUMBER, replaceText);
