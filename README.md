# postcss-custom-properties-checker [![](https://img.shields.io/npm/v/postcss-custom-properties-checker.svg)](https://www.npmjs.com/package/postcss-custom-properties-checker)

PostCSS plugin to check unresolved [postcss-custom-properties](https://www.npmjs.com/package/postcss-custom-properties).
Plugin was created because of [postcss-custom-properties](https://www.npmjs.com/package/postcss-custom-properties) since version [8.0.0](https://github.com/postcss/postcss-custom-properties/blob/main/CHANGELOG.md#800-september-16-2018)
removed very usefull `warnings` and `noValueNotifications` options and never [bring back it](https://github.com/postcss/postcss-custom-properties/issues/159).

## Install

To install with npm or yarn, use

```shell
npm install --save postcss-custom-properties-checker

// or

yarn add postcss-custom-properties-checker
```

## Options

### unresolved

Similarly as in [postcss-color-mod-function](https://www.npmjs.com/package/postcss-color-mod-function) there are three options: `throw`, `warn`, and `ignore`. The default option is to `throw`.

## Usage

*postcss.config.js*

```js
module.exports = {
    plugins: [
        // Plugins for PostCSS
        ['postcss-custom-properties', {}],
        ['postcss-custom-properties-checker', { unresolved : 'warn' }],
    ],
};
```
