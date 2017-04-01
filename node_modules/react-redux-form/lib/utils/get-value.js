'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getValue;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function isEvent(event) {
  return !!(event && event.stopPropagation && event.preventDefault);
}

function getEventValue(event) {
  var target = event.target;


  if (!target) {
    if (!event.nativeEvent) {
      return undefined;
    }

    return event.nativeEvent.text;
  }

  if (target.type === 'file') {
    return [].concat(_toConsumableArray(target.files)) || target.dataTransfer && [].concat(_toConsumableArray(target.dataTransfer.files));
  }

  if (target.multiple) {
    return [].concat(_toConsumableArray(target.selectedOptions)).map(function (option) {
      return option.value;
    });
  }

  return target.value;
}

function getValue(value) {
  return isEvent(value) ? getEventValue(value) : value;
}