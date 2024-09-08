import {
  REGEX_HEX_CODE,
  REGEX_IP_ADDRESS,
  REGEX_QUERY_STRING,
  REGEX_SCRIPT_TAG,
  REGEX_STYLE_TAG,
  REGEX_URL_PATH_VALIDATOR,
} from "./contants";

export const ipAddressReplacer = (str, replaceText) =>
  str.replace(REGEX_IP_ADDRESS, replaceText);

export const queryStringReplacer = (str, replaceText) =>
  str.replace(REGEX_QUERY_STRING, replaceText);

export const urlPathReplacer = (str, replaceText) =>
  str.replace(REGEX_URL_PATH_VALIDATOR, replaceText);

export const hexCodeReplacer = (str, replaceText) =>
  str.replace(REGEX_HEX_CODE, replaceText);

export const scriptTagReplacer = (str, replaceText) =>
  str.replace(REGEX_SCRIPT_TAG, replaceText);

export const styleTagReplacer = (str, replaceText) =>
  str.replace(REGEX_STYLE_TAG, replaceText);
