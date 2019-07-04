import { SpecialCase } from "../types";

/**
 * Special case formatting for certain token sequences.
 */
export const specialCases: SpecialCase[] = [
  // ======================================================
  // Carriers
  // ======================================================
  {
    tokens: [
      ["amazon", "shipping", "us"],
    ],
    snake: "amazon_shipping_us",
    pascal: "AmazonShippingUs",
    human: "Amazon Shipping US",
  },
  {
    tokens: [
      ["rrdonnelley"],
      ["rr", "donnelley"],
      ["r", "r", "donnelley"],
    ],
    snake: "rr_donnelley",
    pascal: "RrDonnelley",
    human: "RR Donnelley",
  },
  {
    tokens: [
      ["stamps", "com"],
      ["stamps", ".", "com"],
      ["stamps", "dot", "com"],
    ],
    snake: "stamps_dot_com",
    pascal: "StampsDotCom",
    human: "Stamps.com",
  },


  // ======================================================
  // Order Sources
  // ======================================================
  {
    tokens: [
      ["ebay"],
      ["e", "bay"],
    ],
    snake: "ebay",
    pascal: "Ebay",
    human: "Ebay",
  },
  {
    tokens: [
      ["threedcart"],
      ["3", "dcart"],
      ["3", "d", "cart"],
      ["three", "d", "cart"],
    ],
    snake: "threedcart",
    pascal: "ThreeDCart",
    human: "3dCart",
  },


  // ======================================================
  // E-Commerce
  // ======================================================
  {
    tokens: [
      ["skus"],
      ["sk", "us"],
    ],
    snake: "skus",
    pascal: "Skus",
    human: "SKUs",
  },


  // ======================================================
  // Technology
  // ======================================================
  {
    tokens: [
      ["v", "1"],
    ],
    snake: "v1",
    pascal: "V1",
    human: "v1",
  },
  {
    tokens: [
      ["v", "2"],
    ],
    snake: "v2",
    pascal: "V2",
    human: "v2",
  },
  {
    tokens: [
      ["v", "3"],
    ],
    snake: "v3",
    pascal: "V3",
    human: "v3",
  },
  {
    tokens: [
      ["sdks"],
      ["sd", "ks"],
    ],
    snake: "sdks",
    pascal: "Sdks",
    human: "SDKs",
  },
  {
    tokens: [
      ["csharp"],
      ["c", "#"],
      ["c", "sharp"],
    ],
    snake: "csharp",
    pascal: "CSharp",
    human: "C#",
  },
  {
    tokens: [
      ["dotnet"],
      [".", "net"],
      ["dot", "net"],
    ],
    snake: "dotnet",
    pascal: "DotNet",
    human: ".Net",
  },


  // ======================================================
  // Miscellaneous
  // ======================================================
  {
    tokens: [
      ["ecommerce"],
      ["e", "commerce"],
    ],
    snake: "ecommerce",
    pascal: "ECommerce",
    human: "e-commerce",
  },
  {
    tokens: [
      ["po", "box"],
      ["p", "o", "box"],
    ],
    snake: "po_box",
    pascal: "PoBox",
    human: "PO Box",
  },
  {
    tokens: [
      ["4", "x", "6"],
    ],
    snake: "4x6",
    pascal: "4x6",
    human: "4x6",
  },

];
