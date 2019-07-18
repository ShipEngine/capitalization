ShipEngine Capitalization
==============================================
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



API
--------------------------
ShipEngine Capitalization exports several different capitalization functions, each of which accepts the same parameters:

- `text` - A string containing one or more words. The string can be in any format (snake case, camel case, pascal case, sentence case, etc.)

- `options` - An optional [`Options` object](#options-object)


### `snakeCase(text, [options])`
Snake case strings are all lowercase with underscores as word separators. No whitespace or punctuation characters are allowed, and the string must begin with a letter.

|Example inputs                      |Example outputs
|:-----------------------------------|:----------------------------------------------
|`Hello, World!`                   |`hello_world`
|`TheShipEngineAPI`                |`the_shipengine_api`


### `kebabCase(text, [options])`
Kebab case strings are all lowercase with hyphens as word separators. No whitespace or punctuation characters are allowed, and the string must begin with a letter.

|Example inputs                      |Example outputs
|:-----------------------------------|:----------------------------------------------
|`Hello, World!`                   |`hello-world`
|`TheShipEngineAPI`                |`the-shipengine-api`


### `camelCase(text, [options])`
Camel case strings use capitalization as word separators. Each new word begins with a capital letter, followed by lowercase letters. No whitespace or punctuation characters are allowed, and the string must begin with a lowercase letter.

|Example inputs                      |Example outputs
|:-----------------------------------|:----------------------------------------------
|`Hello, World!`                   |`helloWorld`
|`this is the shipengine api`      |`thisIsTheShipEngineApi`


### `pascalCase(text, [options])`
Pascal case strings use capitalization as word separators. Each new word begins with a capital letter, followed by lowercase letters. No whitespace or punctuation characters are allowed, and the string must begin with an uppercase letter.

|Example inputs                      |Example outputs
|:-----------------------------------|:----------------------------------------------
|`Hello, World!`                   |`HelloWorld`
|`this is the shipengine api`      |`ThisIsTheShipEngineApi`


### `sentenceCase(text, [options])`
Sentence case strings follow basic English sentence rules. Words are separated by spaces. The first word is capitalized, and most other words are lowercase, except for proper nouns and acronyms. Punctuation characters are allowed.

|Example inputs                      |Example outputs
|:-----------------------------------|:----------------------------------------------
|`hello_world`                     |`Hello world`
|`this is the shipengine api`      |`This is the ShipEngine API`


### `titleCase(text, [options])`
Title case strings follow [title case rules](https://capitalizemytitle.com/). Words are separated by spaces, most words are capitalized, and punctuation characters are allowed.

|Example inputs                      |Example outputs
|:-----------------------------------|:----------------------------------------------
|`hello_world`                     |`Hello World`
|`this is the shipengine api`      |`This is the ShipEngine API`


### `Options` object
All of the ShipEngine Capitalization function accept an optional second argument, which is an options object. This object can contain any of the following options:

|Option             |Type             |Default              |Description
|:------------------|:----------------|:--------------------|:--------------------------------------------
|`prefix`           |`string`         |n/a                  |A prefix to be used when the result would otherwise be invalid due to starting with an illegal character.<br><br>For example, <nobr>`snakeCase("4x6 label")`</nobr> would throw an error because snake case strings cannot start with a number.  But <nobr>`snakeCase("4x6 label", { prefix: "size" })`</nobr> would return `size_4x6_label`.<br><br>**Note:** The prefix is only added when needed. So <nobr>`snakeCase("label size 4x6", { prefix: "size" })`</nobr> would _not_ use the prefix.
