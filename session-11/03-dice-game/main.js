console.log('Reusing the player class - implementation of a different dice game');

const gameRounds = 10;

const p1 = new Player('Petrică', '🥕');
const p2 = new Player('Maricica', '💃')

for (let i = 1; i <= gameRounds; i++) {
    console.log('');
    console.log(`=== ROUND ${i} STARTS ====`);

    // if(Math.random() > 0.5){
    //     console.log(`${p1.avatar}: ${p1.name}'s will to roll the dice this round!`);
    //     p1.move();
    // }
    // else{
    //     console.log(`${p2.avatar}: ${p2.name}'s will to roll the dice this round!`);
    //     p2.move();
    // }

    const chosenPlayer = Math.random() > 0.5 ? p1 : p2;
    console.log(`${chosenPlayer.avatar}: ${chosenPlayer.name}'s will to roll the dice this round!`);
    chosenPlayer.move();
}