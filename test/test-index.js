import test from 'ava';
import MaterialColorsSelector from '../index';

const mcs = new MaterialColorsSelector();

test('mcs#random', t => {
  t.true((typeof mcs.random()) === 'string');
});

test('mcs#randomColors', t => {
  t.true((typeof mcs.randomColors()) === 'string');
});

test('mcs#randomVariants', t => {
  t.true((typeof mcs.randomVariants()) === 'string');
});
