// tslint:disable: no-unbound-method no-default-export
import { createCapitalizers } from "./create-capitalizers";
import { defaultDeviations } from "./deviations/defaults";

export { Options } from "./settings";

/**
 * The default ShipEngine capitalization rules.
 */
export const capitalization = createCapitalizers(defaultDeviations);

/**
 * Converts a string to snake_case (e.g. "Hello, World!" => "hello_world"),
 * accounting for special cases (e.g. "TheShipEngineAPI" => "the_shipengine_api").
 */
export const snakeCase = capitalization.snakeCase;

/**
 * Converts a string to kebab-case (e.g. "Hello, World!" => "hello-world"),
 * accounting for special cases (e.g. "TheShipEngineAPI" => "the-shipengine-api").
 */
export const kebabCase = capitalization.kebabCase;

/**
 * Converts a string to camelCase (e.g. "Hello, World!" => "helloWorld"),
 * accounting for special cases (e.g. "this is the shipengine api" => "thisIsTheShipEngineApi").
 */
export const camelCase = capitalization.camelCase;

/**
 * Converts strings to PascalCase (e.g. "Hello, World!" => "HelloWorld"),
 * accounting for special cases (e.g. "this is the shipengine api" => "ThisIsTheShipEngineApi").
 */
export const pascalCase = capitalization.pascalCase;

/**
 * Converts strings to Sentence case (e.g. "hello_world" => "Hello world"),
 * accounting for special cases (e.g. "this is the shipengine api" => "This is the ShipEngine API").
 */
export const sentenceCase = capitalization.sentenceCase;

/**
 * Converts strings to Title Case (e.g. "hello_world" => "Hello World"),
 * accounting for special cases (e.g. "this is the shipengine api" => "This is the ShipEngine API").
 */
export const titleCase = capitalization.titleCase;

// Export `capitalization` as the default export
export default capitalization;

// CommonJS default export hack
if (typeof module === "object" && typeof module.exports === "object") {
  module.exports = Object.assign(module.exports.default, module.exports);  // tslint:disable-line: no-unsafe-any
}
