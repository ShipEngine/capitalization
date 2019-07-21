import { Capitalization } from "../formatters";
import { Token, TokenType } from "../tokenizer";
import { capitalizeWord } from "../utils";
import { Deviations } from "./deviations";
import { Deviation } from "./types";

/**
 * Returns an array of tokens with deviations from the normal capitalization rules.
 */
export function applyDeviations(tokens: Token[], deviations: Deviations, capitalization: Capitalization): Token[] {
  let results = [];
  let token: Token;

  // Loop through all the tokens
  while (tokens.length > 0) {
    // Is there a deviation for this token sequence?
    let [deviation, start, end] = deviations.find(tokens);

    if (deviation) {
      // Substitute a new token for this token sequence
      token = applyDeviation(deviation, capitalization, tokens.slice(start, end + 1));
      tokens = tokens.slice(end + 1);
    }
    else {
      token = tokens.shift()!;

      switch (capitalization) {
        case Capitalization.Snake:
          // Change the token to all lowercase
          token.value = token.normalized;
          break;

        case Capitalization.Pascal:
          // Capitalize only the first letter
          token.value = capitalizeWord(token.normalized);
          break;

        case Capitalization.Human:
          // Keep the original token unchanged
          break;

        default:
          throw new Error(`Unknown capitalization style: ${capitalization}`);
      }
    }

    results.push(token);
  }

  return results;
}

/**
 * Applies nonstandard capitalization rules and returns a new token to replace the orignal token(s)
 */
function applyDeviation(deviation: Deviation, capitalization: Capitalization, tokens: Token[]): Token {
  let token: Token = {
    type: TokenType.Deviation,
    value: "",
    normalized: "",
  };

  let value = deviation[capitalization];
  if (typeof value === "string") {
    token.value = value;
    token.normalized = value;
  }
  else {
    token.value = value.title;
    token.normalized = value.normal;
  }

  // But some replacement values include RegExp placeholders
  if (token.value.includes("{")) {
    replaceTokenPlaceholders(token, tokens);
  }

  return token;
}

/**
 * Replaces placeholders like `{0}`, `{1}`, `{2}` etc. with their corresponding token values.
 */
function replaceTokenPlaceholders(token: Token, tokens: Token[]): void {
  for (let i = 0; i < tokens.length; i++) {
    let regex = new RegExp(`\\{${i}\\}`);
    token.value = token.value.replace(regex, tokens[i].value);
    token.normalized = token.normalized.replace(regex, tokens[i].normalized);
  }
}
