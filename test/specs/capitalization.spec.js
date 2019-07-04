"use strict";

const capitalization = require("../..");
const { expect } = require("chai");
const names = require("../utils/names");

/* eslint-disable quote-props */
const testCases = {
  "ShipEngine": {
    sentenceCase: "ShipEngine",
    titleCase: "ShipEngine",
    snakeCase: "shipengine",
    pascalCase: "ShipEngine",
    camelCase: "shipEngine",
  },
  "shipEngine": {
    sentenceCase: "ShipEngine",
    titleCase: "ShipEngine",
    snakeCase: "shipengine",
    pascalCase: "ShipEngine",
    camelCase: "shipEngine",
  },
  "shipengine": {
    sentenceCase: "ShipEngine",
    titleCase: "ShipEngine",
    snakeCase: "shipengine",
    pascalCase: "ShipEngine",
    camelCase: "shipEngine",
  },
  "ship_engine": {
    sentenceCase: "ShipEngine",
    titleCase: "ShipEngine",
    snakeCase: "shipengine",
    pascalCase: "ShipEngine",
    camelCase: "shipEngine",
  },


  "ShipEngine RestAPI": {
    sentenceCase: "ShipEngine REST API",
    titleCase: "ShipEngine REST API",
    snakeCase: "shipengine_rest_api",
    pascalCase: "ShipEngineRestApi",
    camelCase: "shipEngineRestApi",
  },
  "shipEngineCsharpDotnetSdk": {
    sentenceCase: "ShipEngine C# .Net SDK",
    titleCase: "ShipEngine C# .Net SDK",
    snakeCase: "shipengine_csharp_dotnet_sdk",
    pascalCase: "ShipEngineCSharpDotNetSdk",
    camelCase: "shipEngineCSharpDotNetSdk",
  },
  "shipengine java script sdks": {
    sentenceCase: "ShipEngine JavaScript SDKs",
    titleCase: "ShipEngine JavaScript SDKs",
    snakeCase: "shipengine_javascript_sdks",
    pascalCase: "ShipEngineJavaScriptSdks",
    camelCase: "shipEngineJavaScriptSdks",
  },
  "ship_engine_json_api": {
    sentenceCase: "ShipEngine JSON API",
    titleCase: "ShipEngine JSON API",
    snakeCase: "shipengine_json_api",
    pascalCase: "ShipEngineJsonApi",
    camelCase: "shipEngineJsonApi",
  },


  "create_ups_4x6_pdf_label": {
    sentenceCase: "Create UPS 4x6 PDF label",
    titleCase: "Create UPS 4x6 PDF Label",
    snakeCase: "create_ups_4x6_pdf_label",
    pascalCase: "CreateUps4x6PdfLabel",
    camelCase: "createUps4x6PdfLabel",
  },
  "createDhl4x6PngLabel": {
    sentenceCase: "Create DHL 4x6 PNG Label",
    titleCase: "Create DHL 4x6 PNG Label",
    snakeCase: "create_dhl_4x6_png_label",
    pascalCase: "CreateDhl4x6PngLabel",
    camelCase: "createDhl4x6PngLabel",
  },
  "CreateFEDEX4x6ZplLabel": {
    sentenceCase: "Create FedEx 4x6 ZPL Label",
    titleCase: "Create FedEx 4x6 ZPL Label",
    snakeCase: "create_fedex_4x6_zpl_label",
    pascalCase: "CreateFedEx4x6ZplLabel",
    camelCase: "createFedEx4x6ZplLabel",
  },
  "Create_fed_ex4x6zpl_label": {
    sentenceCase: "Create FedEx 4x6 ZPL label",
    titleCase: "Create FedEx 4x6 ZPL Label",
    snakeCase: "create_fedex_4x6_zpl_label",
    pascalCase: "CreateFedEx4x6ZplLabel",
    camelCase: "createFedEx4x6ZplLabel",
  },


  "connect_channeladvisor_eu_ecommerce_sku": {
    sentenceCase: "Connect ChannelAdvisor EU e-commerce SKU",
    titleCase: "Connect ChannelAdvisor EU E-commerce SKU",
    snakeCase: "connect_channel_advisor_eu_ecommerce_sku",
    pascalCase: "ConnectChannelAdvisorEuECommerceSku",
    camelCase: "connectChannelAdvisorEuECommerceSku",
  },
  "connectPaypalUkEcommerceSKUs": {
    sentenceCase: "Connect PayPal UK e-commerce SKUs",
    titleCase: "Connect PayPal UK E-commerce SKUs",
    snakeCase: "connect_paypal_uk_ecommerce_skus",
    pascalCase: "ConnectPayPalUkECommerceSkus",
    camelCase: "connectPayPalUkECommerceSkus",
  },
  "ConnectPayPalAuECommerceAsin": {
    sentenceCase: "Connect PayPal AU e-commerce ASIN",
    titleCase: "Connect PayPal AU E-commerce ASIN",
    snakeCase: "connect_paypal_au_ecommerce_asin",
    pascalCase: "ConnectPayPalAuECommerceAsin",
    camelCase: "connectPayPalAuECommerceAsin",
  },
  "connectWoocommerceCaEcommerceQrCode": {
    sentenceCase: "Connect WooCommerce CA e-commerce QR Code",
    titleCase: "Connect WooCommerce CA E-commerce QR Code",
    snakeCase: "connect_woo_commerce_ca_ecommerce_qr_code",
    pascalCase: "ConnectWooCommerceCaECommerceQrCode",
    camelCase: "connectWooCommerceCaECommerceQrCode",
  },


  "the shipengine rest api is the easiest way to print +4x+6 pdf labels for stamps.com, ups, fedex, and dhl... ": {
    sentenceCase: "The ShipEngine REST API is the easiest way to print 4x6 PDF labels for Stamps.com, UPS, FedEx, and DHL...",
    titleCase: "The ShipEngine REST API is the Easiest way to Print 4x6 PDF Labels for Stamps.com, UPS, FedEx, and DHL...",
    snakeCase: "the_shipengine_rest_api_is_the_easiest_way_to_print_4x6_pdf_labels_for_stamps_dot_com_ups_fedex_and_dhl",
    pascalCase: "TheShipEngineRestApiIsTheEasiestWayToPrint4x6PdfLabelsForStampsDotComUpsFedExAndDhl",
    camelCase: "theShipEngineRestApiIsTheEasiestWayToPrint4x6PdfLabelsForStampsDotComUpsFedExAndDhl",
  },
};

for (let { functionName } of names) {
  describe(`${functionName}()`, () => {
    for (let [input, outputs] of Object.entries(testCases)) {
      it(`Should ${functionName} ${JSON.stringify(input)}`, () => {
        let result = capitalization[functionName](input);
        expect(result).to.equal(outputs[functionName]);
      });
    }
  });
}
