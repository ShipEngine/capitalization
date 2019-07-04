"use strict";

const commonJSExport = require("../../");
const { default: defaultExport, capitalization: namedExport } = require("../../");
const { expect } = require("chai");
const names = require("../utils/names");

const functionNames = names.map((name) => name.functionName);

describe("@shipengine/capitalization package exports", () => {

  function isCapitalizationModule (obj) {
    expect(obj).to.be.an("object");
    expect(obj).to.include.keys(...functionNames);
    return true;
  }

  it("should export the capitalization module as the default CommonJS export", () => {
    expect(commonJSExport).to.satisfy(isCapitalizationModule);
  });

  it("should export the capitalization module as the default ESM export", () => {
    expect(defaultExport).to.satisfy(isCapitalizationModule);
  });

  it("should export the capitalization module as a named export", () => {
    expect(namedExport).to.satisfy(isCapitalizationModule);
  });

  for (let functionName of functionNames) {
    it(`should export the ${functionName} function as a named export`, () => {
      let fn = commonJSExport[functionName];
      expect(fn).to.be.a("function");
      expect(fn.name).to.equal(functionName);
      expect(fn.length).to.equal(2);
    });
  }

  it("should not export anything else", () => {
    expect(commonJSExport).to.have.same.keys(
      "default",
      "capitalization",
      ...functionNames,
    );
  });

});
