import test from 'ava';
import MaterialColorsSelector from '../index';

const mcs = new MaterialColorsSelector();

test('mcs#randomColors', t => {
  var end = false;
  while(!end) {
    if(mcs.randomColors() === 'pink') {
      end = true;
    }
  }
  t.true(true);
});

test('mcs#randomVariants', t => {
  var end = false;
  while(!end) {
    if(mcs.randomVariants() === 'accent-1') {
      end = true;
    }
  }
  t.true(end);
});

test('mcs#random', t => {
  var end = false;
  while(!end) {
    if(mcs.random() === 'purple accent-4') {
      end = true;
    }
  }
  t.true(end);
});
