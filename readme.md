# @bemoje/is-function

Returns true if the argument is a function; false otherwise.

#### Version

<span><a href="https://npmjs.org/@bemoje/is-function" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/is-function" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/is-function" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-is-function.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/is-function" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-is-function.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/is-function" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/is-function" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-is-function/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-is-function" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/is-function
npm install --save @bemoje/is-function
npm install --save-dev @bemoje/is-function
```

## Usage

```javascript
import isFunction from '@bemoje/is-function'

isFunction(function () {})
//=> true

isFunction(class {})
//=> true

isFunction(() => {})
//=> true

isFunction()
//=> false

isFunction('a')
//=> false

isFunction(1)
//=> false

```


## Tests
Uses *Jest* to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API
### isFunction

##### Returns
true if the argument is a function; false otherwise.

##### Parameters

-   `value` **any** The value to evaluate

##### Returns
**[boolean][3]** 

[1]: #isfunction

[2]: #parameters

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean