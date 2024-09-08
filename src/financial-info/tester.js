import { REGEX_BITCOIN_ADDRESS, REGEX_CREDIT_CARD } from "./constants";

export const isCreditCard = (str) => REGEX_CREDIT_CARD.test(str);

export const isBitcoinAddress = (str) => REGEX_BITCOIN_ADDRESS.test(str);
