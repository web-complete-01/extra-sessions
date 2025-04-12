// STACK VS HEAP
// debugger;
console.log('array shuffle');

const players = [];

// const playerFactory = (name, location) => ({ name, location, score: 0})

function playerFactory(name, location) {
    return {
        name,
        location,
        score: 0
    }
}

players.push(playerFactory('Eduard','B'));
players.push(playerFactory('Andreea','CJ'));
players.push(playerFactory('Elena','B'));
players.push(playerFactory('Anca','CJ'));
players.push(playerFactory('Ionut','BN'));
players.push(playerFactory('Adi','BV'));
console.log(players);

function shuffle1(maxInterChanges = 100) {
    // set a random munber of interchanges
    const interChanges = Math.floor(Math.random() * maxInterChanges);
    console.log(`Interchanges: ${interChanges}`);

    // pick 2 random elements of the array and interchange them for the set number of interchanges
    for (let i = 0; i < interChanges; i++) {
        const randomIndex1 = Math.floor(Math.random() * players.length);
        const randomIndex2 = Math.floor(Math.random() * players.length);
        console.log(`Sould interchange ${randomIndex1} with ${randomIndex2}`);

        // do the interchange - the old way
        const aux = players[randomIndex1];
        players[randomIndex1] = players[randomIndex2];
        players[randomIndex2] = aux;
    }
}

function shuffle(array){
    return array.sort((a, b) => Math.random() - 0.5);
}

document.querySelector('#shuffle-btn').addEventListener('click', () => {
    const displayPlayers = document.querySelector('#display-players');
    displayPlayers.innerHTML = '';

    shuffle(players).forEach(player => {
        const playerContainer = document.createElement('div');
        playerContainer.classList.add('player-container');
        playerContainer.textContent = player.name;
        displayPlayers.append(playerContainer);
    });
});


