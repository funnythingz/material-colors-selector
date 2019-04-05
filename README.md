# material-colors-selector

[![Build Status](https://travis-ci.org/funnythingz/material-colors-selector.svg?branch=master)](https://travis-ci.org/funnythingz/material-colors-selector)

random select from material colors for [https://vuetifyjs.com/en/framework/colors#material-colors][vuetifyjs].

## Usage

```bash
$ npm install material-colors-selector
```

```javascript
const mcs = new MaterialColorsSelector();

mcs.random() //=> 'purple darken-2'
mcs.randomColors() //=> 'green'
mcs.randomVariants() //=> 'accent-4'
```

&copy; funnythingz
