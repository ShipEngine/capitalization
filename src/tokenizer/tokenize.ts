import { nextToken } from "./next-token";
import { Token } from "./types";

/**
 * Splits the given string into an array of Tokens.
 */
export function tokenize(text: string): Token[] {
  let tokens = [];

  // Split the text into an array of tokens
  while (text.length > 0) {
    let [token, , end] = nextToken(text);
    if (!token) break;

    tokens.push(token);
    text = text.slice(end + 1);
  }

  return tokens;
}
