import { Deviations } from "../deviations";
import { Token } from "../tokenizer";
import { ignorePunctuation, tokenValue } from "../utils";
import { Capitalization, Formatter } from "./types";

/**
 * Converts strings to PascalCase (e.g. "Hello, World!" => "HelloWorld"),
 * accounting for special cases (e.g. "this is the shipengine api" => "ThisIsTheShipEngineApi").
 */
export const pascalCase: Formatter = {
  name: "pascal case",

  /**
   * Pascal case criteria:
   *
   *   - only letters and numbers are allowed
   *   - must start with an uppercase letter
   *
   */
  pattern: /^[A-Z][a-zA-Z0-9]+$/,

  /**
   * Joins an array of tokens into a PamelCased string,
   * with the specified deviations from the normal capitalization rules.
   */
  joinTokens(tokens: Token[], deviations: Deviations): string {
    // Apply pascal case deviations
    tokens = deviations.apply(tokens, Capitalization.Pascal);

    // Remove all punctuation tokens
    tokens = tokens.filter(ignorePunctuation);

    // Join the token values into a string
    let camelText = tokens.map(tokenValue).join("");
    return camelText;
  }
};
