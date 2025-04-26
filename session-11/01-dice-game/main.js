console.log('Old way implementation of dice game');

const gameRounds = 6;

function playerFactory(name, avatar){
    return {
        name, 
        avatar,
        score: 0
    }
}

function movePlayer(p){
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    console.log(`${p.avatar}: ${p.name} rolls ${diceRoll}`);
    p.score += diceRoll;
    console.log(`${p.avatar}: ${p.name} current score:  ${p.score}`);
}

const p1 = playerFactory('Petrică','🥕');
const p2 = playerFactory('Maricica', '💃')

for (let i = 1; i <= gameRounds; i++) {
    console.log('');
    console.log(`=== ROUND ${i} STARTS ====`);

    // player 1 turn
    movePlayer(p1);
    
    // player 2 turn
    movePlayer(p2);
}