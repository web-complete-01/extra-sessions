/*
Programul preia de la utilizator o valoare numerica si afiseaza
   1. intr-un singur mesaj, o secventa de text ce contine: numarului anterior, numarul primit, numarul succesiv (ex. 5 => "4, 5, 6")
   2. opusul numarului (ex. 5 => "opusul numarului 5 este -5", -3 => "opusul numarului -3 este 3")
   3. restul impartirii la 2 (ex. 5 => "restul impartirii lui 5 la 2 este 1")
   4. 2 la puterea valorii (ex. 3 => "2 la puterea 3 este 8")
*/

console.log('main.js loaded...');

let inputNr = prompt('Input a number');
inputNr = Number(inputNr);

let prevNr = inputNr - 1;
let nextNr = inputNr + 1;

alert('The numbers sequece: ' + prevNr + ', ' + inputNr + ', ' + nextNr);
// alert(`The numbers sequence: ${prevNr}, ${inputNr}, ${nextNr}`);

alert('The opposite of ' + inputNr + ' is: ' + -inputNr);
// alert(`The opposite of ${inputNr} is: ${-inputNr}`);

alert('The remainder of ' + inputNr + ' divided by 2 is: ' + inputNr % 2);
// alert(`The remainder of ${inputNr} divided by 2 is: ${inputNr % 2}`);

alert(`2 to the power of ` + inputNr + ` equals: ` + 2**inputNr);
// alert(`2 to the power of ${inputNr} equals: ${2**inputNr}`);