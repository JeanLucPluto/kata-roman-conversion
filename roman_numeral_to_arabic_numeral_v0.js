// convert roman numeral ('I' to 'MMMCMXCIX') to its arabic numeral equivalent (1 to 3999)

const roman_to_arabic_numeral_conversion = [
  {roman: "IV", value: 4},
  {roman: "IX", value: 9},
  {roman: "XL", value: 40},
  {roman: "XC", value: 90},
  {roman: "CD", value: 400},
  {roman: "CM", value: 900},

  {roman: "V", value:  5},
  {roman: "X", value:  10},
  {roman: "L", value:  50},
  {roman: "C", value:  100},
  {roman: "D", value:  500},
  {roman: "M", value:  1000}
];

exports.convert_to_arabic_numeral = function(roman) {
  let result = roman;

  for(let index = 0; index < roman_to_arabic_numeral_conversion.length; index++) {
    while(result.includes(roman_to_arabic_numeral_conversion[index].roman)) {
      result = result.replace(roman_to_arabic_numeral_conversion[index].roman,
                             "I".repeat(roman_to_arabic_numeral_conversion[index].value));
    }
  }
  return result.length;
}
