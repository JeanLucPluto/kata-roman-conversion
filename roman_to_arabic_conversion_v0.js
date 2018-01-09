const roman = require('./roman_numeral_to_arabic_numeral_v0.js');
const rl = require("readline");


let prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question("Enter Roman numeral (number from I to MMMCMXCIX): ", function (number) {
  const message = "Arabic numeral: " + roman.convert_to_arabic_numeral(number);
  console.log(message);
  process.exit();
});
