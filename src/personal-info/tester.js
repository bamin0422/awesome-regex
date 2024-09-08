import {
  REGEX_EMAIL,
  REGEX_PHONE_NUMBER,
  REGEX_RESIDENT_REGISTRATION_NUMBER,
} from "./constants";

export const isEmail = (str) => REGEX_EMAIL.test(str);

export const isPhoneNumber = (str) => REGEX_PHONE_NUMBER.test(str);

export const isResidentRegistrationNumber = (str) =>
  REGEX_RESIDENT_REGISTRATION_NUMBER.test(str);
