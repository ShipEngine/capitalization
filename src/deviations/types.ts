/**
 * A deviation from the normal capitalization rules.
 */
export interface Deviation {
  tokens: TokenMatcher[];
  snake: string;
  pascal: string;
  human: string | HumanValue;
}

/**
 * A humanized deviation value
 */
export interface HumanValue {
  title: string;
  normal: string;
}

/**
 * A simplified way of configuring `Deviation` rules for common scenarios.
 */
export interface DeviationConfig {
  acronyms?: Acronym[];
  combinedWords?: CombinedWords[];
  separatedWords?: SeparatedWords[];
  specialCases?: SpecialCase[];
}

/**
 * An acronym (e.g. "UPS", "ASIN", "REST").
 */
export type Acronym = string;

/**
 * A token sequence that should be combined into a single word in some cases.
 * (e.g. ["ship", "engine"] => "shipengine")
 */
export type CombinedWords = string[];

/**
 * A token sequence that should always be treated as separate words.
 * (e.g. ["channel", "advisor"] => "ChannelAdvisor")
 */
export type SeparatedWords = string[];

/**
 * Token sequences that require special-case formatting.
 * (e.g. ["dot", "net"] => ".Net")
 */
export interface SpecialCase {
  tokens: TokenMatcher[][];
  snake: string;
  pascal: string;
  human: string | HumanValue;
}

/**
 * A normalized token value, or a RegExp pattern that matches a normalized token value
 */
export type TokenMatcher = string | RegExp;
