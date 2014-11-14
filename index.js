'use strict';

/**
 * coerce value to integer.
 */

exports.toInteger = function toInteger(val) {
  return parseInt(val, 10);
}

/**
 * coerce value to float.
 */

exports.toFloat = function toFloat(val) {
  return parseFloat(val);
}

/**
 * coerce `N..N` formatted string to array.
 */

exports.toListFromRange = function toListFromRange(val) {
  return val.split('..').map(Number);
}

/**
 * coerce `X,Y` formatted string to array.
 */

exports.toListFromCommaDelimited = function toListFromCommaDelimited(val) {
  return val.split(',');
}

/**
 * coerce multiple calls to array.
 */

exports.toListFromMultipleInvocations = function toListFromMultipleInvocations(val, memo) {
  memo.push(val);
  return memo;
}

/**
 * increment each time invoked.
 */

exports.incrementBy = function incrementBy(step) {
  return function (v, total) {
    return total + step;
  };
}
