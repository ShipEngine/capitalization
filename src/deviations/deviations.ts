import { Capitalization } from "../formatters";
import { Token } from "../tokenizer";
import { applyDeviations } from "./apply-deviations";
import { normalizeAcronyms, normalizeCombinedWords, normalizeSeparatedWords, normalizeSpecialCases } from "./normalize";
import { Deviation, DeviationConfig } from "./types";

/**
 * Deviations from the normal capitalization rules.
 */
export class Deviations {
  private readonly _deviations: Deviation[];

  /**
   * Combines the different types of deviations (acronyms, combined words, separated words, special cases)
   * into a flattened, normalized, and sorted array of `Deviation` objects.
   */
  public constructor({ acronyms, combinedWords, separatedWords, specialCases }: DeviationConfig) {
    this._deviations = [
      ...normalizeAcronyms(acronyms),
      ...normalizeCombinedWords(combinedWords),
      ...normalizeSeparatedWords(separatedWords),
      ...normalizeSpecialCases(specialCases),
    ];

    this._deviations.sort(byLength);
  }

  /**
   * Allows the deviations to be iterated.
   */
  public [Symbol.iterator]() {
    return this._deviations[Symbol.iterator]();
  }

  /**
   * Applies the deviations to the given array of tokens
   *
   * @param tokens - An array of tokens to apply deviations to
   * @param capitalization - The capitalization style to apply deviations for
   * @returns - A new array of tokens with the deviations applied
   */
  public apply(tokens: Token[], capitalization: Capitalization): Token[] {
    return applyDeviations(tokens, this, capitalization);
  }

  /**
   * Finds the deviation, if any, that matches the specified token sequence.
   *
   * @param tokens - An array of tokens to find in the deviations list
   * @param [index] - The index in `tokens` to begin matching
   *
   * @returns
   * The matched Deviation (if any), and the start and end indexes of the token sequence that matched it
   */
  public find(tokens: Token[]): [Deviation | undefined, number, number] {
    let deviation: Deviation, i, deviationToken, token;

    // Loop thorugh all the deviations
    outerLoop:
    for (deviation of this._deviations) {
      // Compare each token in the deviation to the corresponding token in the sequence
      for (i = 0; i < deviation.tokens.length; i++) {
        deviationToken = deviation.tokens[i];
        token = tokens[i];

        if (!token) {
          // Not a match, because there aren't enough tokens
          continue outerLoop;
        }
        else if (typeof deviationToken === "string" && token.normalized !== deviationToken) {
          // Not a match
          continue outerLoop;
        }
        else if (deviationToken instanceof RegExp && !deviationToken.test(token.normalized)) {
          // Not a match
          continue outerLoop;
        }
      }

      // All tokens match
      return [deviation, 0, i - 1];
    }

    // There was no match
    return [undefined, 0, tokens.length];
  }
}

/**
 * Sort the deviations by sequence length, so the longest ones come first.
 * This ensures that we match the most tokens possible.
 */
function byLength(a: Deviation, b: Deviation): number {
  return b.tokens.length - a.tokens.length;
}
