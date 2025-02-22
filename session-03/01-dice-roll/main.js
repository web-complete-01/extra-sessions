console.log(`Dice roll simulation`);


/**
 * 
 */
function diceRoll(sides = 6) {
    return Math.floor(Math.random() * sides) + 1;
}


/**
 * 
 */
function diceSetRoll(dices = 2, diceSides = 6) {
    const diceSet = [];

    for (let i = 0; i < dices; i++) {
        diceSet[i] = diceRoll(diceSides);
    }

    return diceSet;
}