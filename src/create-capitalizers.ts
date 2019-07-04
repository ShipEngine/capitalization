import { Deviations } from "./deviations";
import { camelCase, Formatter, pascalCase, sentenceCase, snakeCase, titleCase } from "./formatters";
import { Options, Settings } from "./settings";
import { tokenize } from "./tokenizer";

/**
 * Creates capitalization functions with the specified deviations from the normal capitalization rules.
 */
export function createCapitalizers(deviations: Deviations) {
  return {
    snakeCase(text: string, options?: Options): string {
      return capitalize(text, new Settings(options), snakeCase, deviations);
    },

    camelCase(text: string, options?: Options): string {
      return capitalize(text, new Settings(options), camelCase, deviations);
    },

    pascalCase(text: string, options?: Options): string {
      return capitalize(text, new Settings(options), pascalCase, deviations);
    },

    sentenceCase(text: string, options?: Options): string {
      return capitalize(text, new Settings(options), sentenceCase, deviations);
    },

    titleCase(text: string, options?: Options): string {
      return capitalize(text, new Settings(options), titleCase, deviations);
    },
  };
}

/**
 * Concerts the given text to the specified capitalization format,
 * with the specified deviations from the normal capitalization rules.
 */
function capitalize(text: string, settings: Settings, formatter: Formatter, deviations: Deviations): string {
  let { name, pattern, joinTokens } = formatter;

  if (typeof text !== "string") {
    throw new Error(`Unable to convert ${text} to ${name}`);
  }

  try {
    // Parse the text into an array of tokens
    let tokens = tokenize(text);

    if (tokens.length === 0) {
      throw new Error(`Unable to convert "${text}" to ${name}`);
    }

    // Join the tokens into a string in the new format
    let formattedText = joinTokens(tokens, deviations);

    // Make sure the formatted text is valid
    if (!pattern.test(formattedText)) {
      throw new Error(`Unable to convert "${text}" to ${name}. Got "${formattedText}", which is invalid.`);
    }

    return formattedText;
  }
  catch (error) {
    if (settings.prefix) {
      // Try inserting the prefix to produce a valid result
      text = `${settings.prefix} ${text}`;
      settings.prefix = undefined;
      return capitalize(text, settings, formatter, deviations);
    }
    else {
      throw error;
    }
  }
}
