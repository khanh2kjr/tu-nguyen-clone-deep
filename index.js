"use strict";
module.exports = function clone(currentObject) {
  const isObject = typeof currentObject === "object";
  const isArray = Array.isArray(currentObject);
  if (!isObject && !isArray) {
    return currentObject;
  }
  const result = isObject ? {} : [];
  for (let key in currentObject) {
    const keyObject = isObject ? key : +key;
    result[keyObject] = clone(currentObject[keyObject]);
  }
  return result;
};
