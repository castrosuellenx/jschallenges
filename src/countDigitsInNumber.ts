// Check for frequency of digits in a number
// Requirement: Without converting it to string

export function countNumberDigits(num: number): Record<string, number> {
  // Deal with 0
  if (num === 0) {
    return { "0": 1 };
  }

  // Deal with negative numbers
  num = Math.abs(num);

  // Init an empty object
  const count: Record<string, number> = {};

  // Go through each digit
  while (num > 0) {
    const lastDigit = num % 10;

    const keyInTheCountObj = String(lastDigit);

    // Add to the obj if isn't already
    if (!count[keyInTheCountObj]) {
      count[keyInTheCountObj] = 0;
    }

    // Increment the count in the obj if is added
    count[keyInTheCountObj] += 1;

    // Update it to be the number without the last digit
    num = Math.floor(num / 10);
  }

  return count;
}
