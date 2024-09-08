import {
  REGEX_HEX_CODE,
  REGEX_IP_ADDRESS,
  REGEX_QUERY_STRING,
  REGEX_SCRIPT_TAG,
  REGEX_STYLE_TAG,
  REGEX_URL_PATH_VALIDATOR,
} from "./contants";

export const isIpAddress = (str) => REGEX_IP_ADDRESS.test(str);

export const isQueryString = (str) => REGEX_QUERY_STRING.test(str);

export const isUrlPath = (str) => REGEX_URL_PATH_VALIDATOR.test(str);

export const isHexCode = (str) => REGEX_HEX_CODE.test(str);

export const isScriptTag = (str) => REGEX_SCRIPT_TAG.test(str);

export const isStyleTag = (str) => REGEX_STYLE_TAG.test(str);
