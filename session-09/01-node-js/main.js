console.log('Hello world in NodeJS!');


const port = 8888;
console.log(`This will start a webserver on port ${port}`);

// const h1 = document.querySelector('h1');
// console.log(h1);

let counter = 0;

const http = require('http');

//create a server object:
http.createServer(function (req, res) {
    // console.log(req);
    // console.log(`===============`);
    console.log(`Counter is: ${counter}`)
    counter++;
    console.log(`Counter is: ${counter}`)
    const responseText = `<h1>Ta-daaaa ${counter}</h1>`;
    res.write(responseText); //write a response to the client
    res.end(); //end the response
}).listen(port); //the server object listens on specified port