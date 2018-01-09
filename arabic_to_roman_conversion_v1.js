const roman = require('./arabic_numeral_to_roman_numeral_v1.js');
const rl = require("readline");


let prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question("Enter Arabic numeral (number from 1 to 3999): ", function (number) {
  if (( number < 1) || (number > 3999)) {
    message = "ERROR!\n" + number + " is not between 1 and 3999."
  } else {
    message = "Roman numeral: " + roman.convertToRoman(number);
  }
  console.log(message);
  process.exit();
});
