/**
 * Options that can be provided by callers.  All fields are optional.
 */
export type Options = undefined | {
  /**
   * A prefix to be used when the result would otherwise be invalid due to starting with an illegal character.
   *
   * @example
   *     // Throws an error, since snake_case strings cannot start with a number
   *     snakeCase("4x6 inch label");
   *
   *     // Returns "size_4x6_inch_label"
   *     snakeCase("4x6 inch label", { prefix: "size" });
   *
   *     // Returns "Size4x6InchLabel"
   *     // (the prefix is capitalized, according to Pascal casing rules)
   *     pascalCase("4x6 inch label", { prefix: "size" });
   */
  prefix?: string;
};

/**
 * Normalized, sanitized, and complete settings,
 * with default values for anything that wasn't specified by the caller.
 */
export class Settings {
  public prefix: string | undefined;

  /**
   * Normalizes and sanitizes options provided by the caller,
   * and applies default values for any settings that aren't specified.
   */
  public constructor(options: Options) {
    options = options || {};

    options.prefix && (this.prefix = String(options.prefix));
  }
}
