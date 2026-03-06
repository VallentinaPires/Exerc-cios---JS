let numeroC = parseInt(Math.random()*101);
let numeroF = 9 / 5 * numeroC + 32;

console.log(numeroC, numeroF);


document.getElementById("elNumeroC").textContent = `Temperatura em graus Celsios (C): ${numeroC}`;
document.getElementById("elNumeroF").textContent = `Temperatura em graus Fahrenheit (F) = ${numeroF}`;
