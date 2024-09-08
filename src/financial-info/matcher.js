import { REGEX_BITCOIN_ADDRESS, REGEX_CREDIT_CARD } from "./constants";

export const creditCardMatcher = (str) => str.match(REGEX_CREDIT_CARD);

export const bitcoinAddressMatcher = (str) => str.match(REGEX_BITCOIN_ADDRESS);
