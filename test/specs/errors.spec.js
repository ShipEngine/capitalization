"use strict";

const capitalization = require("../../lib");
const { expect } = require("chai");
const names = require("../utils/names");

for (let { functionName, friendlyName } of names) {
  describe(`${functionName}() errors`, () => {

    it("should throw an error if called without any arguments", () => {
      function noPrefix () {
        capitalization[functionName]();
      }

      expect(noPrefix).to.throw(`Unable to convert undefined to ${friendlyName}`);
    });

    it("should throw an error if called with null", () => {
      function noPrefix () {
        capitalization[functionName](null);
      }

      expect(noPrefix).to.throw(`Unable to convert null to ${friendlyName}`);
    });

    it("should throw an error if called with an invalid value, even if a prefix is supplied", () => {
      function noPrefix () {
        capitalization[functionName](undefined, { prefix: "some prefix" });
      }

      expect(noPrefix).to.throw(`Unable to convert undefined to ${friendlyName}`);
    });

    it("should throw an error if called with a zero", () => {
      function noPrefix () {
        capitalization[functionName](0);
      }

      expect(noPrefix).to.throw(`Unable to convert 0 to ${friendlyName}`);
    });

    it("should throw an error if called with a number", () => {
      function noPrefix () {
        capitalization[functionName](42);
      }

      expect(noPrefix).to.throw(`Unable to convert 42 to ${friendlyName}`);
    });

    it("should throw an error if called with false", () => {
      function noPrefix () {
        capitalization[functionName](false);
      }

      expect(noPrefix).to.throw(`Unable to convert false to ${friendlyName}`);
    });

    it("should throw an error if called with true", () => {
      function noPrefix () {
        capitalization[functionName](true);
      }

      expect(noPrefix).to.throw(`Unable to convert true to ${friendlyName}`);
    });

    it("should throw an error if called with an empty string", () => {
      function noPrefix () {
        capitalization[functionName]("");
      }

      expect(noPrefix).to.throw(`Unable to convert "" to ${friendlyName}`);
    });

    it("should throw an error if called with all whitespace", () => {
      function noPrefix () {
        capitalization[functionName]("  \n\t");
      }

      expect(noPrefix).to.throw(`Unable to convert "  \n\t" to ${friendlyName}`);
    });

  });
}
