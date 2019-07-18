"use strict";

const { defaultDeviations } = require("../../lib/deviations/defaults");
const { expect } = require("chai");

describe("defaultDeviations", () => {
  it("should not contain any duplicates", () => {
    let keys = [];

    for (let deviation of defaultDeviations) {
      let key = deviation.tokens.join("+");

      if (keys.includes(key)) {
        throw new Error(
          "There are multiple deviation rules for the same token sequence: " +
          JSON.stringify(deviation.tokens)
        );
      }

      keys.push(key);
    }
  });

  it("all tokens should be lowercase", () => {
    for (let deviation of defaultDeviations) {
      for (let token of deviation.tokens) {
        if (typeof token === "string") {
          expect(token).to.equal(token.toLowerCase(),
            `The ${deviation.snake} deviation rule has invalid tokens. ` +
            "All tokens must be lowercase. " + JSON.stringify(deviation.tokens)
          );
        }
        else {
          expect(token).to.be.an.instanceOf(RegExp);
        }
      }
    }
  });

  it("all snake case values should be all lowercase", () => {
    for (let deviation of defaultDeviations) {
      expect(deviation.snake).to.equal(deviation.snake.toLowerCase());
    }
  });

  it("all pascal case values should start with an uppercase letter", () => {
    for (let deviation of defaultDeviations) {
      let firstLetter = deviation.pascal[0];
      expect(firstLetter).to.equal(firstLetter.toUpperCase());
    }
  });
});
