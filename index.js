const sample = require('lodash/sample');
const isEmpty = require('lodash/isEmpty');

class MaterialColorsSelector {

  constructor() {
    this.colors = [
      'red','pink','purple','deep-purple','indigo','blue','light-blue',
      'cyan','teal','green','light-green','lime','yellow','amber',
      'orange','deep-orange','brown','blue-grey','grey'
    ];

    this.variants = [
      'lighten-1', 'lighten-2', 'lighten-3', 'lighten-4', 'lighten-5',
      'darken-1', 'darken-2', 'darken-3', 'darken-4',
      'accent-1', 'accent-2', 'accent-3', 'accent-4'
    ];
  }

  random() {
    return `${this.randomColors()} ${this.randomVariants()}`;
  }

  randomColors() {
    return sample(this.colors);
  }

  randomVariants() {
    return sample(this.variants);
  }

}

module.exports = MaterialColorsSelector;
