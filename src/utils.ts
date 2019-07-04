import { Token, TokenType } from "./tokenizer";

const zero = 48;
const nine = 57;
const uppercaseA = 65;
const uppercaseZ = 90;
const lowercaseA = 97;
const lowercaseZ = 122;

/**
 * Capitalizes the first letter of a word.
 */
export function capitalizeWord(text: string): string {
  return text[0].toUpperCase() + text.slice(1);
}

/**
 * Un-capitalizes the first letter of a word.
 */
export function uncapitalizeWord(text: string): string {
  return text[0].toLowerCase() + text.slice(1);
}

/**
 * A filter function that ignores punctuation tokens.
 */
export function ignorePunctuation(token: Token): boolean {
  return token.type !== TokenType.Punctuation;
}

/**
 * Returns the value of the given token
 */
export function tokenValue(token: Token): string {
  return token.value;
}

/**
 * Returns information about the given character.
 */
export function character(char: string = "") {
  let code = char.charCodeAt(0);
  let isUpper = code >= uppercaseA && code <= uppercaseZ;
  let isLower = code >= lowercaseA && code <= lowercaseZ;
  let isNumber = code >= zero && code <= nine;

  return { code, isLower, isUpper, isNumber };
}
