import { Deviations } from "../deviations";
import { acronyms } from "./acronyms";
import { combinedWords } from "./combined-words";
import { separatedWords } from "./separated-words";
import { specialCases } from "./special-cases";

/**
 * The default deviations from the normal capitalization rules.
 */
export const defaultDeviations = new Deviations({
  acronyms,
  combinedWords,
  separatedWords,
  specialCases,
});
