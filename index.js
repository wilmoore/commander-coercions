'use strict';

exports.toInteger = function toInteger(val) {
  return ~~val;
}

exports.toFloat = function toFloat(val) {
  return parseFloat(val);
}

exports.toListFromRange = function toListFromRange(val) {
  return val.split('..').map(Number);
}

exports.toListFromCommaDelimited = function toListFromCommaDelimited(val) {
  return val.split(',');
}

exports.toListFromMultipleInvocations = function toListFromMultipleInvocations(val, memo) {
  memo.push(val);
  return memo;
}

exports.incrementBy = function incrementBy(step) {
  return function (v, total) {
    return total + stop;
  };
}

