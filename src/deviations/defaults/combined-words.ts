import { CombinedWords } from "../types";

/**
 * Token sequences that are combined into single words in some cases (currently only used for snake case).
 *
 * They are formatted as follows:
 *
 *    - snake_case: "shipengine", "fedex", "paypal"     <--- Combined into a single word
 *    - camelCase: "shipEngine", "fedEx", "payPal"
 *    - PascalCase: "ShipEngine", "FedEx", "PayPal"
 *    - Humanized: "ShipEngine", "FedEx", "PayPal"
 */
export const combinedWords: CombinedWords[] = [
  // Carriers
  ["fed", "ex"],
  ["on", "trac"],

  // Order Sources
  ["pay", "pal"],

  // Technology
  ["java", "script"],

  // Miscellaneous
  ["ship", "engine"],
];
