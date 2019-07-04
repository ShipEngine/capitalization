import { Deviations } from "../deviations";
import { Token } from "../tokenizer";
import { snakeCase } from "./snake-case";
import { Formatter } from "./types";

/**
 * Converts strings to kebab-case (e.g. "Hello, World!" => "hello-world"),
 * accounting for special cases (e.g. "TheShipEngineAPI" => "the-shipengine-api").
 */
export const kebabCase: Formatter = {
  name: "kebab case",

  /**
   * Kebab case criteria:
   *
   *   - only lowercase letters, numbers, and hyphens are allowed
   *   - must start with a letter
   *   - must not have consecutive hyphens
   *
   */
  pattern: /^[a-z](-?[a-z0-9]+)*$/,

  /**
   * Joins an array of tokens into a kebab-cased string,
   * with the specified deviations from the normal capitalization rules.
   */
  joinTokens(tokens: Token[], deviations: Deviations): string {
    // Concert the tokens to snake case
    let snakeText = snakeCase.joinTokens(tokens, deviations);

    // Kebab case is just snake case with hyphens instead of underscores
    return snakeText.replace(/_/g, "-");
  }
};
