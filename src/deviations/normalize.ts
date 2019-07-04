import { capitalizeWord } from "../utils";
import { Acronym, CombinedWords, Deviation, SeparatedWords, SpecialCase } from "./types";

/**
 * Normalizes the `acronyms` list as an array of deviations.
 */
export function normalizeAcronyms(acronyms: Acronym[] = []): Deviation[] {
  let deviations = [];

  for (let acronym of acronyms) {
    deviations.push({
      tokens: [acronym],
      snake: acronym,
      pascal: capitalizeWord(acronym),
      human: acronym.toUpperCase(),
    });
  }

  return deviations;
}

/**
 * Normalizes the `combinedWords` list as an array of deviations.
 */
export function normalizeCombinedWords(combinedWords: CombinedWords[] = []): Deviation[] {
  let deviations = [];

  for (let words of combinedWords) {
    // snake_case (e.g. "shipengine")
    let snake = words.join("");

    // PascalCase (e.g. "ShipEngine")
    let pascal = words.map(capitalizeWord).join("");

    // Add a deviation for each word as its own token (e.g. ["ship", "engine"] )
    deviations.push({ tokens: words, snake, pascal, human: pascal });

    // Add a deviation for all words in a single token (e.g. ["shipengine"] )
    deviations.push({ tokens: [words.join("")], snake, pascal, human: pascal });
  }

  return deviations;
}

/**
 * Normalizes the `separatedWords` list as an array of deviations.
 */
export function normalizeSeparatedWords(separatedWords: SeparatedWords[] = []): Deviation[] {
  let deviations = [];

  for (let words of separatedWords) {
    // snake_case (e.g. "woo_commerce")
    let snake = words.join("_");

    // PascalCase (e.g. "WooCommerce")
    let pascal = words.map(capitalizeWord).join("");

    // Add a deviation for each word as its own token (e.g. ["woo", "commerce"] )
    deviations.push({ tokens: words, snake, pascal, human: pascal });

    // Add a deviation for all words in a single token (e.g. ["woocommerce"] )
    deviations.push({ tokens: [words.join("")], snake, pascal, human: pascal });
  }

  return deviations;
}

/**
 * Normalizes the `specialCases` list as an array of deviations.
 */
export function normalizeSpecialCases(specialCases: SpecialCase[] = []): Deviation[] {
  let deviations = [];

  // Flatten all the special cases, so that each one only has a single token sequence
  for (let specialCase of specialCases) {
    for (let tokens of specialCase.tokens) {
      deviations.push({ ...specialCase, tokens });
    }
  }

  return deviations;
}
