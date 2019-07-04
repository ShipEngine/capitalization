import { Deviations } from "../deviations";
import { Token, TokenType } from "../tokenizer";
import { capitalizeWord } from "../utils";
import { Capitalization, Formatter } from "./types";

/**
 * Converts strings to Sentence case (e.g. "hello_world" => "Hello world"),
 * accounting for special cases (e.g. "this is the shipengine api" => "This is the ShipEngine API").
 */
export const sentenceCase: Formatter = {
  name: "sentence case",

  /**
   * Sentence case criteria:
   *
   *   - must contain at least one letter or number
   *
   */
  pattern: /[a-zA-Z0-9]/,

  /**
   * Joins an array of tokens into a Sentence case string,
   * with the specified deviations from the normal capitalization rules.
   */
  joinTokens(tokens: Token[], deviations: Deviations): string {
    let sentence = "";

    // Apply human deviations
    tokens = deviations.apply(tokens, Capitalization.Human);

    for (let [index, token] of tokens.entries()) {
      // Insert spaces between tokens (except punctuation tokens)
      if (index > 0 && token.type !== TokenType.Punctuation) {
        sentence += " ";
      }

      switch (token.type) {
        case TokenType.Number:
          sentence += token.normalized;
          break;

        case TokenType.Punctuation:
          sentence += token.normalized;
          break;

        case TokenType.Word:
          if (index === 0) {
            // Capitalize the first word
            sentence += capitalizeWord(token.value);
          }
          else if (token.value.length < 5) {
            // Don't capitalize short words
            sentence += token.normalized;
          }
          else {
            // Other words may be capitalized or lowercase, depending on their original value
            sentence += token.value;
          }
          break;

        default:
          throw new Error(`Unknown token type: ${token.type}`);
      }
    }

    return sentence;
  }
};
