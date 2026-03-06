let numeroSorteado = parseInt(Math.random() * 101);
let numeroSucessor = numeroSorteado + 1;
let numeroAntecessor = numeroSorteado - 1;
let dobroNumero = numeroSorteado * 2;
let metadeNumero = numeroSorteado / 2;

// Mostrar os números
console.log(numeroSorteado, numeroSucessor, numeroAntecessor, dobroNumero, metadeNumero);

document.getElementById('elNumeroSorteado').textContent = `Número Sorteado: ${numeroSorteado}`;
document.getElementById("elNumeroSucessor").textContent = `Sucessor = ${numeroSucessor}`;
document.getElementById("elNumeroAntecessor").textContent = `Antecessor = ${numeroAntecessor}`;
document.getElementById("elDobroNumero").textContent = `Dobro = ${dobroNumero}`;
document.getElementById("elMetadeNumero").textContent = `Metade = ${metadeNumero}`;

