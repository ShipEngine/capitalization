import { Deviations } from "../deviations";
import { Token, TokenType } from "../tokenizer";
import { capitalizeWord } from "../utils";
import { Capitalization, Formatter } from "./types";

/**
 * Converts strings to Title Case (e.g. "hello_world" => "Hello World"),
 * accounting for special cases (e.g. "this is the shipengine api" => "This is the ShipEngine API").
 */
export const titleCase: Formatter = {
  name: "title case",

  /**
   * Sentence case criteria:
   *
   *   - must contain at least one letter or number
   *
   */
  pattern: /[a-zA-Z0-9]/,

  /**
   * Joins an array of tokens into a Title Case string,
   * with the specified deviations from the normal capitalization rules.
   *
   * @see https://capitalizemytitle.com/
   */
  joinTokens(tokens: Token[], deviations: Deviations): string {
    let title = "";

    // Apply human deviations
    tokens = deviations.apply(tokens, Capitalization.Human);

    for (let [index, token] of tokens.entries()) {
      // Insert spaces between tokens (except punctuation tokens)
      if (index > 0 && token.type !== TokenType.Punctuation) {
        title += " ";
      }

      switch (token.type) {
        case TokenType.Number:
          title += token.normalized;
          break;

        case TokenType.Punctuation:
          title += token.normalized;
          break;

        case TokenType.Word:
          if (index === 0 || index === tokens.length - 1) {
            // Always capitalize the first and last word in the title
            title += capitalizeWord(token.value);
          }
          else if (token.value.length < 5) {
            // Don't capitalize short words
            title += token.normalized;
          }
          else {
            // Capitalize all other words
            title += capitalizeWord(token.value);
          }
          break;

        default:
          throw new Error(`Unknown token type: ${token.type}`);
      }
    }

    return title;
  }
};
