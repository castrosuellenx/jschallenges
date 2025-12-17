import { awardEmployeeBonuses } from "./employeesBonusAward";
import { emojifyPhrase } from "./emojify";
import { isAnagram } from "./isItAnAnagram";
import {
  reverseString,
  reverseStringsInArray,
  reverseStringV2,
  reverseStringsInArrayV2,
} from "./reverseMessages";
import { removeDupeChars } from "./nonDuplicatedCharacters";
import { countNumberDigits } from "./countDigitsInNumber";

// FizzBuzz lookalike
awardEmployeeBonuses();

// Emojify
console.log(emojifyPhrase("I :heart: my :cat:"));
console.log(emojifyPhrase("I :heart: my :elephant:"));

// Is it an anagram?
console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("treasure", "measure"));
console.log(isAnagram("rainbow", "crossbow"));

// Reverse Alien messages
const title = ":htraE no od ot ffutS";
const messages = [
  "maerc eci yrT",
  "rewoT leffiE tisiV",
  "noom eht ot snamuh etacoleR",
  "egrahc ni stac tuP",
];

// V1
console.log(reverseString(title));
console.log(reverseStringsInArray(messages));

// V2
console.log(reverseStringV2(title));
console.log(reverseStringsInArrayV2(messages));

// Remove duplicated characters from Grandpa's password
const grandpasPassword = "9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23";
console.log(removeDupeChars(grandpasPassword));

// Count digits of a number
console.log(countNumberDigits(0));
console.log(countNumberDigits(9889778));
console.log(countNumberDigits(2025));
console.log(countNumberDigits(-123));