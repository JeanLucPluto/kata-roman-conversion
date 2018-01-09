// Convert an Arabic numeral (number) from 1 to 3999 into its Roman numeral equivalent

const RomanValues = [
  /* units     */  ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
  /* tens      */  ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
  /* hundreds  */  ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
  /* thousands */  ['','M', 'MM', 'MMM']
];

exports.convertToRoman = function(number) {
  const digits = convertToIntArray(number);
  const roman_values = getRomanValuesPerDigit(digits);
  return roman_values.join('');
}

function convertToIntArray(number) {
  return (number.toString()).split('');
}

function getRomanValuesPerDigit(digits) {
  const numberOfDigits = digits.length;
  let result = [];

  digits.forEach(function(digit, index){
    let powerOf10 = numberOfDigits - index - 1;

    result.push(RomanValues[powerOf10][digit]);
  });
  return result;
}
