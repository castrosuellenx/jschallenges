import { awardEmployeeBonuses } from "./employeesBonusAward";
import { emojifyPhrase } from "./emojify";
import { isAnagram } from "./isItAnAnagram";

// FizzBuzz lookalike
awardEmployeeBonuses();

// Emojify
console.log(emojifyPhrase("I :heart: my :cat:"));
console.log(emojifyPhrase("I :heart: my :elephant:"));

// Is it an anagram?
console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("treasure", "measure"));
console.log(isAnagram("rainbow", "crossbow"));