/* Pizza Night? 
It's the weekend and you and your friends can't agree on 
what to order for dinner, so you put it to a vote. 

Write a function to find the food with the highest number of votes. 

Your function should take in a food object and find the food
with the most votes. It should log the winner, along with 
how many votes it received.  

Example input: {"🐈 cats": 19, "🐕 dogs": 17} 
Example output: The winner is 🐈 cats with 19 votes!
*/

export function findTheWinner(votesByItem: Record<string, number>) {
  let winner: { id: string; votes: number } | null = null;

  for (const [key, value] of Object.entries(votesByItem)) {
    if (!winner || winner.votes < value) {
      winner = { id: key, votes: value };
    }
  }

  if (!winner) {
    return `We haven't found a winner :(`;
  }

  return `The winner is ${winner.id} with ${winner.votes} votes!`;
}
