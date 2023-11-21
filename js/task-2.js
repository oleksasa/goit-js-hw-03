function makeArray(firstArray, secondArray, maxLength) {
  const unitedArray = firstArray.concat(secondArray).slice(0, maxLength);
  return unitedArray;
}
