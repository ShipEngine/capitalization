import { nextToken } from "./next-token";
import { Token } from "./types";

/**
 * Splits the given string into an array of Tokens.
 */
export function tokenize(text: string): Token[] {
  let tokens = [];
  let token, index = 0;

  // Split the text into an array of tokens
  while (index < text.length) {
    [index, token] = nextToken(text, index);
    if (!token) break;
    tokens.push(token);
  }

  return tokens;
}
