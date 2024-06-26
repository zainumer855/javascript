"use strict";

/*
Coding Challenge #1
We're building a football betting app (soccer for my American friends �)! Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.

Your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')✅

2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players✅

3. Create an array 'allPlayers' containing all players of both teams (22 players)✅

4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'✅

5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')✅

6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.

Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK �
*/
const teamNames = ["Bayern Munich", "Borrussia Dortmund"];
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Create one player array for each team (variables 'players1' and 'players2') ✅
const [player1, player2] = game.players;
// console.log(player1);
// console.log(player2);

// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players ✅

const [gk, ...fieldPlayers] = player1;
// console.log(gk, fieldPlayers);

// 3. Create an array 'allPlayers' containing all players of both teams (22 players) ✅

const allPlayers = [...player1, ...player2];
// console.log(allPlayers);

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic' ✅
const players1Final = ["Thiago", "Coutinho", "Perisic", ...player1];
// console.log(players1Final);

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')✅

// const { team1, x: draw, team2 } = game.odds;
const {
  odds: { team1, x: draw, team2 },
} = game;
// console.log(team1, draw, team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

function printGoals(...playersName) {
  // console.log(`${playersName.length} goals were scored`);
  for (let i = 0; i < playersName.length; i++) {
    // console.log(playersName[i]);
  }
}

// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals("Davies", "Muller");
// printGoals(...game.scored);
// console.log()

// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.

// team1 < team2 && console.log("Team 1 is more likely to win");

// for (const [i, player] of Object.entries(game.scored)) {
//   console.log(`Goal ${Number(i) + 1}: ${player}`);
// }

const scored = [...game.scored.entries()];
// console.log(scored);

for (const [i, player] of scored) {
  // console.log(`Goal ${i + 1}: ${player}`);
}

// console.log(Object.values(game.odds));
const score = Object.values(game.odds);
let sum = 0;
for (const value of score) {
  sum += value;
}
// console.log(sum / score.length);

const entries = Object.entries(game.odds);
// console.log(entries);
for (const [team, score] of entries) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${score}`);
}

// console.log(Object.entries(game));
