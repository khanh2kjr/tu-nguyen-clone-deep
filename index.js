"use strict";
module.exports = function clone(currentObject) {
  const isObject = typeof currentObject === "object";
  const isArray = Array.isArray(currentObject);
  if (!isObject && !isArray) {
    return currentObject;
  }
  const result = isArray ? [] : {};
  for (let key in currentObject) {
    const keyObject = isArray ? +key : key;
    result[keyObject] = clone(currentObject[keyObject]);
  }
  return result;
};
