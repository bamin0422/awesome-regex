////////// COMPUTER INFORMATION //////////

/**
 * @description regex IP address
 */
export const REGEX_IP_ADDRESS =
  /\b(?:(?:2(?:[0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9])\.){3}(?:(?:2([0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9]))\b/gi;

/**
 * @description regex url query string
 */
export const REGEX_QUERY_STRING = /[\?&](\w+)=(\w+)/g;

/**
 * @description regex url path validator
 */
export const REGEX_URL_PATH_VALIDATOR =
  /^\/(([A-z0-9\-\%]+\/)*[A-z0-9\-\%]+$)?/gm;

/**
 * @description regex hex code
 */
export const REGEX_HEX_CODE =
  /#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/g;

/**
 * @description regex script tag
 */
export const REGEX_SCRIPT_TAG = /<.*?script.*\/?>/gi;

/**
 * @description regex style tag
 */
export const REGEX_STYLE_TAG = /<.*?script.*\/?>/gi;
