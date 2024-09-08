import {
  REGEX_HEX_CODE,
  REGEX_IP_ADDRESS,
  REGEX_QUERY_STRING,
  REGEX_SCRIPT_TAG,
  REGEX_STYLE_TAG,
  REGEX_URL_PATH_VALIDATOR,
} from "./contants";

export const ipAddressMatcher = (str) => str.match(REGEX_IP_ADDRESS);

export const queryStringMatcher = (str) => str.match(REGEX_QUERY_STRING);

export const urlPathMatcher = (str) => str.match(REGEX_URL_PATH_VALIDATOR);

export const hexCodeMatcher = (str) => str.match(REGEX_HEX_CODE);

export const scriptTagMatcher = (str) => str.match(REGEX_SCRIPT_TAG);

export const styleTagMatcher = (str) => str.match(REGEX_STYLE_TAG);
