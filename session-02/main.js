console.log('Survivor game');

const playerName = prompt(`Input the player's name: `);
const huntingSkill = Number(prompt(`Input de player's hunting skill (0 to 10)`));
const survivalDays = 10;
let daysCount = 1; 

while (daysCount <= survivalDays) {
    console.log('');
    console.log(`Day ${daysCount} starts!`);
    
    let diceRoll = Math.floor(Math.random() * 10) +  1;
    console.log(`${playerName} (hunting skill: ${huntingSkill}) goes hunting and rolls a ${diceRoll}`);

    if(diceRoll <= huntingSkill){
        console.log(`${playerName} finds food 🍗!`);
    }
    else{
        console.log(`${playerName} is starving... 💀`);
    }

    daysCount++;
}