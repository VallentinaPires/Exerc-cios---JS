let numero1 = parseInt(Math.random() * 101);
let numero2 = parseInt(Math.random() * 101);
let menor;
let maior;

document.getElementById("elNumero1").textContent = `O primeiro número é: ${numero1}`;
document.getElementById("elNumero2").textContent = `O segundo número é: ${numero2}`;

if (numero1 + numero2 <= 100) {
    menor = (numero1 + numero2) * 3;
    document.getElementById("elMenor").textContent = `Esses dois números somados e depois multiplicados por 3 é = ${menor}`;
}

else {
    maior = (numero1 + numero2) * 5;
    document.getElementById("elMaior").textContent = `Esses dois números somados e depois multiplicados por 5 é = ${maior}`;
}

console.log(numero1, numero2);
console.log(menor,maior);