import { character } from "../utils";
import { Token, TokenType } from "./types";

const whitespace = 32;
const underscore = 95;
const plus = 43;
const minus = 45;

const numberPattern = /^\d+(\.\d+)?/;
const lowercaseLettersPattern = /^[a-z]+/;
const capitalLettersPattern = /^([A-Z]+)[a-z]?/;

/**
 * Returns the next token from the given string, starting at the specified character index.
 */
export function nextToken(text: string, index: number): [number, Token | undefined] {
  // Advance to the first token character
  index = findTokenStart(text, index);

  if (index >= text.length) {
    // We've reached the end of the text
    return [index, undefined];
  }

  let char = character(text[index]);
  let nextChar = character(text[index + 1]);
  let token: Token;

  if (char.isUpper) {
    if (nextChar.isLower) {
      // A capitalized word (capital letter followed by lowercase letters)
      let [value] = lowercaseLettersPattern.exec(text.slice(index + 1))!;

      token = {
        type: TokenType.Word,
        value: text[index] + value,
        normalized: text[index].toLowerCase() + value,
      };
    }
    else {
      // An acronym or all-caps word
      let [match, value] = capitalLettersPattern.exec(text.slice(index))!;

      if (match.length > value.length) {
        // The last uppercase letter is the start of a new word,
        // so don't include it in this token
        value = value.slice(0, value.length - 1);
      }

      token = {
        type: TokenType.Word,
        value,
        normalized: value.toLowerCase(),
      };
    }
  }
  else if (char.isLower) {
    // A word consisting of all lowercase letters
    let [value] = lowercaseLettersPattern.exec(text.slice(index))!;

    token = {
      type: TokenType.Word,
      value,
      normalized: value,
    };
  }
  else if (char.isNumber) {
    // This is an unsigned number
    let [value] = numberPattern.exec(text.slice(index))!;

    token = {
      type: TokenType.Number,
      value,
      normalized: String(parseFloat(value)),
    };
  }
  else if ((char.code === plus || char.code === minus) && nextChar.isNumber) {
    // This is a signed number
    let [value] = numberPattern.exec(text.slice(index + 1))!;

    token = {
      type: TokenType.Number,
      value: text[index] + value,
      normalized: String(parseFloat(value)),
    };
  }
  else {
    // This is a puncutation character
    token = {
      type: TokenType.Punctuation,
      value: text[index],
      normalized: text[index],
    };
  }

  return [index + token.value.length, token];
}

/**
 * Finds the first token character, skipping any token separators, such as whitespace and underscores.
 */
function findTokenStart(text: string, index: number): number {
  let code, isSeparator;

  while (index < text.length) {
    code = text.charCodeAt(index);
    isSeparator = code <= whitespace || code === underscore;
    if (!isSeparator) break;
    index++;
  }

  return index;
}
