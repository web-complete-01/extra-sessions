console.log('New and shiny implementation of dice game');

const gameRounds = 6;

const p1 = new Player('Petrică', '🥕');
const p2 = new Player('Maricica', '💃')

for (let i = 1; i <= gameRounds; i++) {
    console.log('');
    console.log(`=== ROUND ${i} STARTS ====`);

    // player 1 turn
    console.log(`${p1.avatar}: ${p1.name}'s turn to roll the dice!`);
    p1.move();

    // player 2 turn
    console.log(`${p2.avatar}: ${p2.name}'s turn to roll the dice!`);
    p2.move();
}


