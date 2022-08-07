const reverseString = (string) => {
  let i = string.length - 1;
  reverse = "";

  while (i >= 0) {
    reverse += string[i];
    i--;
  }
  return reverse;
};

// Do not edit below this line
module.exports = reverseString;
