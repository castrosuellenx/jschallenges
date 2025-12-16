/* We Come in Peace!  
We've received what (we assume) is a message of peace and brotherhood from 
an alien planet. They almost got it right, but the messages are 
backward. Write functions to reverse the backward messages so we can 
read what they have to say! 
*/

const title = ":htraE no od ot ffutS";
const messages = [
  "maerc eci yrT",
  "rewoT leffiE tisiV",
  "noom eht ot snamuh etacoleR",
  "egrahc ni stac tuP",
];

/* Step 1: Reverse a string
Write a function that takes in a string and returns the reverse 
of that string. An interviewer may want to check if you know your
string methods, or may want to know if you can reverse a string manually. 
Practice both ways! 

Example input: !htrae ot emocleW
Example output: Welcome to earth!
*/

export function reverseString(sentence: string) {
  const letters = sentence.split("");
  return letters.reverse().join("");
}

/*
Step 2: Now we'll reverse all strings in an array. Write a function that takes in
an array of strings and returns a new array with all strings reversed.

You can use reuse your reverseString() function, use string methods, or 
reverse the strings manually. 
*/

export function reverseStringsInArray(arrayOfSentences: string[]) {
  return arrayOfSentences.map(reverseString);
}

// console.log(reverseString(title));
// console.log(reverseStringsInArray(messages));

// ---------------------- // ----------------------

// Same functionality, but without the `reverse` built-in function
function reverse<T>(initialArray: Array<T>): Array<T> {
  const reversedArray = [];

  // Use indexes as we lower than
  for (let index = initialArray.length - 1; index >= 0; index--) {
    reversedArray.push(initialArray[index]);
  }

  return reversedArray;
}

export function reverseStringV2(sentence: string) {
  const letters = sentence.split("");
  const reversedLetters = reverse(letters);
  return reversedLetters.join("");
}

export function reverseStringsInArrayV2(arrayOfSentences: string[]) {
  return arrayOfSentences.map(reverseString);
}

console.log(reverseStringV2(title));
console.log(reverseStringsInArrayV2(messages));
