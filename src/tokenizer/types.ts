/**
 * A token is a part of a string, such as a word, number, punctuation, etc.
 */
export interface Token {
  /**
   * The type of token
   */
  type: TokenType;

  /**
   * The raw value of the token, as originally specified (e.g. "ShipEngine", "C#", ".net")
   */
  value: string;

  /**
   * The normalized token value, used for string comparisons.
   *
   *   - Letters are lowercased.
   *   - Punctuation and numbers are unchanged.
   *
   */
  normalized: string;
}

/**
 * The different types of tokens
 */
export enum TokenType {
  Word,
  Number,
  Punctuation,
}
