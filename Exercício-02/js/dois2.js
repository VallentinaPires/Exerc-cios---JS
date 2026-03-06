let numero1 = parseInt(Math.random() * 11);
let numero2 = parseInt(Math.random() * 11);
let numero3 = parseInt(Math.random() * 11);
let numero4 = parseInt(Math.random() * 11);
let media = (numero1 + numero2 + numero3 + numero4)/4;

console.log(numero1, numero2, numero3, numero4, media);

document.getElementById("elNumero01").textContent = `Nota 1: ${numero1}`;
document.getElementById("elNumero02").textContent = `Nota 2: ${numero2}`;
document.getElementById("elNumero03").textContent = `Nota 3: ${numero3}`;
document.getElementById("elNumero04").textContent = `Nota 4: ${numero4}`;
document.getElementById("elMedia").textContent = `Média: ${media}`;