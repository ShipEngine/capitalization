import { Deviations } from "../deviations";
import { Token } from "../tokenizer";
import { ignorePunctuation } from "../utils";
import { Capitalization, Formatter } from "./types";

/**
 * Converts strings to snake_case (e.g. "Hello, World!" => "hello_world"),
 * accounting for special cases (e.g. "TheShipEngineAPI" => "the_shipengine_api").
 */
export const snakeCase: Formatter = {
  name: "snake case",

  /**
   * Snake case criteria:
   *
   *   - only lowercase letters, numbers, and underscores are allowed
   *   - must start with a letter
   *   - must not have consecutive underscores
   *
   */
  pattern: /^[a-z](_?[a-z0-9]+)*$/,

  /**
   * Joins an array of tokens into a snake_cased string,
   * with the specified deviations from the normal capitalization rules.
   */
  joinTokens(tokens: Token[], deviations: Deviations): string {
    let snakeText = "";

    // Apply snake case deviations
    tokens = deviations.apply(tokens, Capitalization.Snake);

    // Remove all punctuation tokens
    tokens = tokens.filter(ignorePunctuation);

    for (let [index, token] of tokens.entries()) {
      // Insert underscores between tokens
      if (index > 0) {
        snakeText += "_";
      }

      snakeText += token.value;
    }

    return snakeText;
  }
};
