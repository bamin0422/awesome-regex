import { REGEX_BITCOIN_ADDRESS, REGEX_CREDIT_CARD } from "./constants";

export const creditCardReplacer = (str, replaceText) =>
  str.replace(REGEX_CREDIT_CARD, replaceText);

export const bitcoinAddressReplacer = (str, replaceText) =>
  str.replace(REGEX_BITCOIN_ADDRESS, replaceText);
