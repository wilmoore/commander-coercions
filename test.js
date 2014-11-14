'use strict';

var test = require('tape');
var util = require('./');
var program = require('commander');

program
  .option('-i, --integer <n>', 'An integer argument', util.toInteger)
  .option('-f, --float <n>', 'A float argument', util.toFloat)
  .option('-r, --range <a>..<b>', 'A range', util.toListFromRange)
  .option('-d, --delimited <a>,<b>', 'A delimited list', util.toListFromCommaDelimited)
  .option('-l, --list <items>', 'A list', util.toListFromCommaDelimited)
  .option('-c, --collect [value]', 'A repeatable value', util.toListFromMultipleInvocations, [])
  .option('-v, --verbose', 'A value that can be increased', util.incrementBy(1), 0)
  .option('-t, --triple', 'A value that can be increased by 3', util.incrementBy(3), 0);

test('toInteger', function (t) {
  t.plan(1);
  program.parse('node test -i 5.5'.split(' '));
  t.equal(program.integer, 5);
});

test('toFloat', function (t) {
  t.plan(1);
  program.parse('node test -f 5.5'.split(' '));
  t.equal(program.float, 5.5);
});

test('toListFromRange', function (t) {
  t.plan(1);
  program.parse('node test -r 5..10'.split(' '));
  t.deepEqual(program.range, [5, 10]);
});

test('toListFromCommaDelimited', function (t) {
  t.plan(1);
  program.parse('node test -d 5,10,15'.split(' '));
  t.deepEqual(program.delimited, ['5', '10', '15']);
});

test('toListFromMultipleInvocations', function (t) {
  t.plan(1);
  program.parse('node test -c foo -c bar -c baz'.split(' '));
  t.deepEqual(program.collect, ['foo', 'bar', 'baz']);
});

test('incrementBy (1)', function (t) {
  t.plan(1);
  program.parse('node test -vvvv --verbose'.split(' '));
  t.deepEqual(program.verbose, 5);
});

test('incrementBy (3)', function (t) {
  t.plan(1);
  program.parse('node test -ttt'.split(' '));
  t.deepEqual(program.triple, 9);
});
