// Convert an Arabic numeral (number) from 1 to 3999 into its Roman numeral equivalent

const simplifiedRomans = ['I', 'X', 'C', 'M']; /* 1, 10, 100, 1000 */
const otherRomanValues = [
  ['IV', 'V', 'IX'],       /* 4,   5,   9   */
  ['XL', 'L', 'XC'],       /* 40,  50,  90  */
  ['CD', 'D', 'CM']        /* 400, 500, 900 */
];
const numbersToBeFixed = [4, 5, 9];

exports.sayHelloInEnglish

exports.convertToRoman = function(number) {
  const digits = convertToIntArray(number);
  const simplifiedRomanValues = getSimplifiedRoman(digits);
  const romanValues = fixSimplifiedRoman(simplifiedRomanValues);
  return romanValues.join('');
}

function convertToIntArray(number) {
  return (number.toString()).split('');
}

function getSimplifiedRoman(digits) {
  const numberOfDigits = digits.length;

  return digits.map((digit, index) =>
    simplifiedRomans[numberOfDigits - index - 1].repeat(digit));
}

function fixSimplifiedRoman(simplified) {
  const numberOfDigits = simplified.length;

  for (let digitRank = 0; digitRank < numberOfDigits; digitRank++) {
    simplified[digitRank] = replaceIfValueIsFourFiveOrNine(simplified[digitRank], numberOfDigits - digitRank - 1);
    simplified[digitRank] = replaceIfValueIsOverFive(simplified[digitRank], numberOfDigits - digitRank - 1);
  }
  return simplified;
}

function replaceIfValueIsFourFiveOrNine(value, index) {
  let result = value;

  for (let fixedIndex = 0; fixedIndex < numbersToBeFixed.length; fixedIndex++) {
    if(value.length === numbersToBeFixed[fixedIndex] ) {
      result = otherRomanValues[index][fixedIndex];
    }
  }
  return result;
}

function replaceIfValueIsOverFive(value, index) {
  let result = value;

  if (value.length > 5) {
    const char = value[0];
    const numberOfChars = value.length;
    result  = otherRomanValues[index][1];
    result += char.repeat(numberOfChars - 5);
  }
  return result;
}
