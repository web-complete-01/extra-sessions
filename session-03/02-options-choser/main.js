console.log(`Random option simulation`);


function randomOption(options = ['Option A', 'Option B', 'Option C']) {
    const randomOption = Math.floor(Math.random() * options.length);
    return options[randomOption];
}


const options = ['KFC', 'McDonalds', 'Burger King', 'Taco Bell', 'Pizza Hut'];
console.log(`Let's be 🐽 for a week!`);
for (let i = 1; i <= 7; i++) {
    console.log(`Day ${i}: ${randomOption(options)}`);
}
