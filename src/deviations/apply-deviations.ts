import { Deviations } from ".";
import { Capitalization } from "../formatters";
import { Token, TokenType } from "../tokenizer";
import { capitalizeWord } from "../utils";

/**
 * Returns an array of tokens with deviations from the normal capitalization rules.
 */
export function applyDeviations(tokens: Token[], deviations: Deviations, capitalization: Capitalization): Token[] {
  let results = [];
  let deviation, token: Token, index = 0;

  // Loop through all the tokens
  while (index < tokens.length) {
    // Is there a deviation for this token sequence?
    deviation = deviations.find(tokens, index);

    if (deviation) {
      // Substitute a new token for this token sequence
      token = {
        type: TokenType.Word,
        value: deviation[capitalization],
        normalized: "",
      };

      index += deviation.tokens.length;
    }
    else {
      token = tokens[index++];

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
