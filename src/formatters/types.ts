import { Deviations } from "../deviations";
import { Token } from "../tokenizer";

/**
 * The logic for formatting a string according to a specific capitalization style.
 */
export interface Formatter {
  /**
   * A human-friendly name for this format.
   */
  name: string;

  /**
   * A regular expression pattern that strings of this format must match.
   */
  pattern: RegExp;

  /**
   * Joins an array of tokens into a string that adheres to the capitalization rules for this format,
   * with the specified deviations from the normal capitalization rules.
   */
  joinTokens(tokens: Token[], deviations: Deviations): string;
}

/**
 * The different capitalization styles
 */
export enum Capitalization {
  Snake = "snake",
  Pascal = "pascal",
  Human = "human",
}
