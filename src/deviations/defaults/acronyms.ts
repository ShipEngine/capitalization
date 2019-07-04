import { Acronym } from "../types";

/**
 * Acronyms are formatted as follows:
 *
 *    - snake_case: "ups", "asin", "rest"
 *    - camelCase: "ups", "asin", "rest"
 *    - PascalCase: "Ups", "Asin", "Rest"
 *    - Humanized: "UPS", "ASIN", "REST"
 */
export const acronyms: Acronym[] = [
  // Carriers
  "ups",
  "dhl",
  "usps",
  "apc",
  "dpd",
  "imex",

  // Countries
  "usa",
  "ca",
  "uk",
  "eu",
  "au",

  // Currencies
  "usd",
  "cad",
  "aud",
  "gbp",
  "eur",
  "nzd",

  // Data center codes
  // "use",    <---- This one conflicts with the word "use"
  "usw",
  "eu1",

  // E-Commerce acronyms
  "sku",
  "asin",
  "upc",
  "qr",
  "po",   // PO Box

  // Technology acronyms
  "rest",
  "http",
  "https",
  "url",
  "api",
  "json",
  "yaml",
  "html",
  "sdk",
  "php",
  "pdf",
  "png",
  "zpl",
];
