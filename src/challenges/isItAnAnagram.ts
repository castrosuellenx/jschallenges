/* 

Anagrams are groups of words that can be spelled with the same letters. 
For example, the letters in "pea" can be rearrange to spell "ape", and 
the letters in "allergy" can be rearranged to spell "gallery."

Write a function to check if two strings of lowercase letters are anagrams. 
Return true if the word is an anagram. Return false if it isn't. 

Example input: "allergy", "gallery"
Example output: true

Example input: "rainbow", "crossbow"
Example output: false

*/

export function isAnagram(firstWord: string, secondWord: string) {
  // If doesn't have the same length, isn't an anagram
  if (firstWord.length !== secondWord.length) {
    return false;
  }

  const firstWordSorted = firstWord.split("").sort().join("");
  const secondWordSorted = secondWord.split("").sort().join("");

  return firstWordSorted === secondWordSorted;
}
