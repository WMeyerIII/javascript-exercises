const palindromes = function (string) {
  lowerNoPunctuation = string.toLowerCase().replace(/[^a-z]/g, "");

  reverse = lowerNoPunctuation.split("").reverse().join("");
  return lowerNoPunctuation == reverse;
};

// Do not edit below this line
module.exports = palindromes;
