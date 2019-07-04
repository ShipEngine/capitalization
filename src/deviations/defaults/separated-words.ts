import { SeparatedWords } from "../types";

/**
 * Tokens that should always be treated as separate words.
 *
 * This handles cases where the caller passes in something like "channeladvisor"
 * and we want to break it into two separate words.
 *
 * They are formatted as follows:
 *
 *    - snake_case: "channel_advisor", "seller_active", "woo_commerce"
 *    - camelCase: "channelAdvisor", "sellerActive", "wooCommerce"
 *    - PascalCase: "ChannelAdvisor", "SellerActive", "WooCommerce"
 *    - Humanized: "ChannelAdvisor", "SellerActive", "WooCommerce"
 */
export const separatedWords: SeparatedWords[] = [
  // Carriers
  ["first", "mile"],

  // Order Sources
  ["channel", "advisor"],
  ["seller", "active"],
  ["woo", "commerce"],
];
