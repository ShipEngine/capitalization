# ShipEngine Capitalization
String capitalization functions with special cases for certain ShipEngine words and phrases



Example
--------------------------

```javascript
import { snakeCase, pascalCase, titleCase } from "@shipengine/capitalization";

snakeCase("TheShipEngineSDKForWoocommerce");        // --> the_shipengine_sdk_for_woo_commerce
pascalCase("the_shipengine_sdk_for_woocommerce");   // --> TheShipEngineSdkForWooCommerce
titleCase("theShipengineSDKForWoocommerce");        // --> The ShipEngine SDK for WooCommerce
```



Installation
--------------------------
You can install ShipEngine Capitalization via [npm](https://docs.npmjs.com/about-npm/).

```bash
npm install @shipengine/capitalization
```



Usage
--------------------------
You can import the specific capitalization function(s) that you need to use:

```javascript
import { kebabCase, camelCase, sentenceCase } from "@shipengine/capitalization";
```

Or you can import the entire capitalization module and use its methods:

```javascript
import capitalization from "@shipengine/capitalization";

capitalization.kebabCase("some text");
```

