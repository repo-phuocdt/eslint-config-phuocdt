/**
 * Testing
 * @phuocdt
 */

const test = require('tape');
const bella = require('bellajs');

const config = require('../../index');

const structure = [
  'parserOptions',
  'env',
  'globals',
  'plugins',
  'extends',
  'rules'
];

test('Testing Shareable Config  object:', (assert) => {
  assert.ok(bella.isObject(config), 'Shareable Config must be an object.');
  structure.every((k) => {
    assert.ok(bella.hasProperty(config, k), `Shareable Config must have the property "${k}"`);
    return k;
  });

  assert.equals(config.extends, 'eslint:recommended', `config.extends value must be "eslint:recommended"`);
  assert.end();
});
