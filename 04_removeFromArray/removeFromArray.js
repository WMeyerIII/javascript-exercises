const removeFromArray = function (array, ...args) {
  for (const arg of args) {
    if (array.includes(arg)) {
      argIndex = array.indexOf(arg);
      array.splice(argIndex, 1);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
