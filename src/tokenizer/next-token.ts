import { character } from "../utils";
import { Token, TokenType } from "./types";

const whitespace = 32;
const hyphen = 45;
const underscore = 95;
const plus = 43;
const minus = 45;

const numberPattern = /^\d+(\.\d+)?/;
const lowercaseLettersPattern = /^[a-z]+/;
const capitalLettersPattern = /^([A-Z]+)[a-z]?/;

/**
 * Returns the next token from the given string
 *
 * @returns
 * The next token (if any), and the start and end indexes of that token in the original string
 */
export function nextToken(text: string): [Token | undefined, number, number] {
  // Advance to the first token character
  let start = findTokenStart(text);

  if (start >= text.length) {
    // We've reached the end of the text
    return [undefined, start, text.length];
  }

  let char = character(text[start]);
  let nextChar = character(text[start + 1]);
  let token: Token;

  if (char.isUpper) {
    if (nextChar.isLower) {
      // A capitalized word (capital letter followed by lowercase letters)
      let [value] = lowercaseLettersPattern.exec(text.slice(start + 1))!;

      token = {
        type: TokenType.Word,
        value: text[start] + value,
        normalized: text[start].toLowerCase() + value,
      };
    }
    else {
      // An acronym or all-caps word
      let [match, value] = capitalLettersPattern.exec(text.slice(start))!;

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
    let [value] = lowercaseLettersPattern.exec(text.slice(start))!;

    token = {
      type: TokenType.Word,
      value,
      normalized: value,
    };
  }
  else if (char.isNumber) {
    // This is an unsigned number
    let [value] = numberPattern.exec(text.slice(start))!;

    token = {
      type: TokenType.Number,
      value,
      normalized: String(parseFloat(value)),
    };
  }
  else if ((char.code === plus || char.code === minus) && nextChar.isNumber) {
    // This is a signed number
    let [value] = numberPattern.exec(text.slice(start + 1))!;

    token = {
      type: TokenType.Number,
      value: text[start] + value,
      normalized: String(parseFloat(value)),
    };
  }
  else {
    // This is a puncutation character
    token = {
      type: TokenType.Punctuation,
      value: text[start],
      normalized: text[start],
    };
  }

  return [token, start, start + token.value.length - 1];
}

/**
 * Finds the first token character, skipping any token separators, such as whitespace and underscores.
 */
function findTokenStart(text: string): number {
  let code, isSeparator;
  let index = 0;

  while (index < text.length) {
    code = text.charCodeAt(index);
    isSeparator = code <= whitespace || code === hyphen || code === underscore;
    if (!isSeparator) break;
    index++;
  }

  return index;
}
