/* Totally Not Another FizzBuzz 

Scrimba CEO Per Borgen wants you to write a program to grant special bonuses to all his employees based on their employee ID numbers! 

Scrimba has 100 employees and their employee ID numbers range from 1 - 100. If the employee's ID number is: 

Divisible by 3 - Vacation! 
Divisible by 5 - $100,000 bonus! 
Divisible by both 3 and 5 - JACKPOT! 1 Million and a Yacht!
Not divisible by 3 or 5 - :(
    
Write a program to loop through all the ID numbers and print their prize. 
Your function's output should look something like this: 

1 - :(
2 - :(
3 - Vacation! 
4 - :(
5 - $100,000 bonus!

Hint: Remainder operator, modulo 
 */

function getEmployeeBonus(employeeId: number): string {
  // Divisible by both 3 and 5
  if (employeeId % 3 === 0 && employeeId % 5 === 0) {
    return 'JACKPOT! 1 Million and a Yacht!';
  }

  // Divisible by 3
  if (employeeId % 3 === 0) {
    return 'Vacation!';
  }

  // Divisible by 5
  if (employeeId % 5 === 0) {
    return '$100,000 bonus!';
  }

  // Empty bonus
  return ':(';
}

export function awardEmployeeBonuses() {
  // Loop through employee IDs from 1 to 100
  for (let employeeId = 1; employeeId <= 100; employeeId++) {
    const employeeBonus = getEmployeeBonus(employeeId);

    // Log the final result for each employee
    console.log(`${employeeId} - ${employeeBonus}`);
  }
}
