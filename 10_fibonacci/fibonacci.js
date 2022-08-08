const fibonacci = function (number) {
  array = [0, 1];

  if (number < 0) {
    return "OOPS";
  }

  for (let i = 1; i < number; i++) {
    next = array[0] + array[1];
    array[0] = array[1];
    array[1] = next;
  }
  return array[1];
};

// Do not edit below this line
module.exports = fibonacci;
