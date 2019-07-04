import { Deviations } from "../deviations";
import { Token } from "../tokenizer";
import { ignorePunctuation, tokenValue, uncapitalizeWord } from "../utils";
import { Capitalization, Formatter } from "./types";

/**
 * Converts strings to camelCase (e.g. "Hello, World!" => "helloWorld"),
 * accounting for special cases (e.g. "this is the shipengine api" => "thisIsTheShipEngineApi").
 */
export const camelCase: Formatter = {
  name: "camel case",

  /**
   * Camel case criteria:
   *
   *   - only letters and numbers are allowed
   *   - must start with a lowercase letter
   *
   */
  pattern: /^[a-z][a-zA-Z0-9]+$/,

  /**
   * Joins an array of tokens into a camelCased string,
   * with the specified deviations from the normal capitalization rules.
   */
  joinTokens(tokens: Token[], deviations: Deviations): string {
    // Apply pascal case deviations
    tokens = deviations.apply(tokens, Capitalization.Pascal);

    // Remove all punctuation tokens
    tokens = tokens.filter(ignorePunctuation);

    // Un-capitalize the first token
    tokens[0].value = uncapitalizeWord(tokens[0].value);

    // Join the token values into a string
    let camelText = tokens.map(tokenValue).join("");
    return camelText;
  }
};
