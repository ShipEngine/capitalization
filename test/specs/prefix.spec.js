"use strict";

const { snakeCase, kebabCase, camelCase, pascalCase, titleCase, sentenceCase } = require("../..");
const { expect } = require("chai");

describe("options.prefix", () => {
  describe("snake case", () => {
    it("should prefix empty strings", () => {
      let result = snakeCase("", { prefix: "a Default Value" });
      expect(result).to.equal("a_default_value");
    });

    it("should prefix whitespace strings", () => {
      let result = snakeCase("  \n\t", { prefix: "aDefaultValue" });
      expect(result).to.equal("a_default_value");
    });

    it("should prefix all-punctuation strings", () => {
      let result = snakeCase(".,/<>?;':[]{}|`~!@#$%^&*()=+", { prefix: "aDefaultValue" });
      expect(result).to.equal("a_default_value");
    });

    it("should prefix strings that start with a number", () => {
      let result = snakeCase("4x6 inch label", { prefix: "size" });
      expect(result).to.equal("size_4x6_inch_label");
    });

    it("should throw an error for strings that start with a number", () => {
      function noPrefix () {
        snakeCase("4x6 inch label");
      }

      expect(noPrefix).to.throw('Unable to convert "4x6 inch label" to snake case. Got "4x6_inch_label", which is invalid.');
    });
  });

  describe("kebab case", () => {
    it("should prefix empty strings", () => {
      let result = kebabCase("", { prefix: "a Default Value" });
      expect(result).to.equal("a-default-value");
    });

    it("should prefix whitespace strings", () => {
      let result = kebabCase("  \n\t", { prefix: "aDefaultValue" });
      expect(result).to.equal("a-default-value");
    });

    it("should prefix all-punctuation strings", () => {
      let result = kebabCase(".,/<>?;':[]{}|`~!@#$%^&*()=+", { prefix: "aDefaultValue" });
      expect(result).to.equal("a-default-value");
    });

    it("should prefix strings that start with a number", () => {
      let result = kebabCase("4x6 inch label", { prefix: "size" });
      expect(result).to.equal("size-4x6-inch-label");
    });

    it("should throw an error for strings that start with a number", () => {
      function noPrefix () {
        kebabCase("4x6 inch label");
      }

      expect(noPrefix).to.throw('Unable to convert "4x6 inch label" to kebab case. Got "4x6-inch-label", which is invalid.');
    });
  });

  describe("camel case", () => {
    it("should prefix empty strings", () => {
      let result = camelCase("", { prefix: "A Default Value" });
      expect(result).to.equal("aDefaultValue");
    });

    it("should prefix whitespace strings", () => {
      let result = camelCase("  \n\t", { prefix: "A_Default_Value" });
      expect(result).to.equal("aDefaultValue");
    });

    it("should prefix all-punctuation strings", () => {
      let result = camelCase(".,/<>?;':[]{}|`~!@#$%^&*()=+", { prefix: "A_Default_Value" });
      expect(result).to.equal("aDefaultValue");
    });

    it("should prefix strings that start with a number", () => {
      let result = camelCase("4x6 inch label", { prefix: "size" });
      expect(result).to.equal("size4x6InchLabel");
    });

    it("should throw an error for strings that start with a number", () => {
      function noPrefix () {
        camelCase("4x6 inch label");
      }

      expect(noPrefix).to.throw('Unable to convert "4x6 inch label" to camel case. Got "4x6InchLabel", which is invalid.');
    });
  });

  describe("pascal case", () => {
    it("should prefix empty strings", () => {
      let result = pascalCase("", { prefix: "a default value" });
      expect(result).to.equal("ADefaultValue");
    });

    it("should prefix whitespace strings", () => {
      let result = pascalCase("  \n\t", { prefix: "a_default_value" });
      expect(result).to.equal("ADefaultValue");
    });

    it("should prefix all-punctuation strings", () => {
      let result = pascalCase(".,/<>?;':[]{}|`~!@#$%^&*()=+", { prefix: "a_default_value" });
      expect(result).to.equal("ADefaultValue");
    });

    it("should prefix strings that start with a number", () => {
      let result = pascalCase("4x6 inch label", { prefix: "size" });
      expect(result).to.equal("Size4x6InchLabel");
    });

    it("should throw an error for strings that start with a number", () => {
      function noPrefix () {
        pascalCase("4x6 inch label");
      }

      expect(noPrefix).to.throw('Unable to convert "4x6 inch label" to pascal case. Got "4x6InchLabel", which is invalid.');
    });
  });

  describe("sentence case", () => {
    it("should prefix empty strings", () => {
      let result = sentenceCase("", { prefix: "aDefaultValue" });
      expect(result).to.equal("A Default Value");
    });

    it("should prefix whitespace strings", () => {
      let result = sentenceCase("  \n\t", { prefix: "a_default_value" });
      expect(result).to.equal("A default value");
    });

    it("should prefix all-punctuation strings", () => {
      let result = sentenceCase(".,/<>?;':[]{}|`~!@#$%^&*()=+", { prefix: "a_default_value" });
      expect(result).to.equal("A default value.,/<>?;':[]{}|`~!@#$%^&*()=+");
    });

    it("should not prefix strings that start with a number", () => {
      let result = sentenceCase("4x6_inch_label", { prefix: "size" });
      expect(result).to.equal("4x6 inch label");
    });

    it("should not throw an error for strings that start with a number", () => {
      let result = sentenceCase("4x6_inch_label");
      expect(result).to.equal("4x6 inch label");
    });
  });

  describe("title case", () => {
    it("should prefix empty strings", () => {
      let result = titleCase("", { prefix: "aDefaultValue" });
      expect(result).to.equal("A Default Value");
    });

    it("should prefix whitespace strings", () => {
      let result = titleCase("  \n\t", { prefix: "a_default_value" });
      expect(result).to.equal("A Default Value");
    });

    it("should prefix all-punctuation strings", () => {
      let result = titleCase(".,/<>?;':[]{}|`~!@#$%^&*()=+", { prefix: "a_default_value" });
      expect(result).to.equal("A Default Value.,/<>?;':[]{}|`~!@#$%^&*()=+");
    });

    it("should not prefix strings that start with a number", () => {
      let result = titleCase("4x6_inch_label", { prefix: "size" });
      expect(result).to.equal("4x6 inch Label");
    });

    it("should not throw an error for strings that start with a number", () => {
      let result = titleCase("4x6_inch_label");
      expect(result).to.equal("4x6 inch Label");
    });
  });
});
