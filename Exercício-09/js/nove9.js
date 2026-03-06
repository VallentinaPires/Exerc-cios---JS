let numero = parseInt(Math.random()*101);
let par;
let impar;

console.log(numero, par, impar);

document.getElementById("elNumero").textContent = `Número: ${numero}`;

if (numero %2 == 0){
    par =  numero ** 2;
    document.getElementById("elPar").textContent = `Esse número ao quadrado é: ${par} `;
}

else {
    impar = numero ** 3 ;
    document.getElementById("elImpar").textContent = `Esse número ao cubo é: ${impar}`;
}