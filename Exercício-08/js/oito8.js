let x = parseInt(Math.random()*101);
let a = parseInt(Math.random()*101);
let b = parseInt(Math.random()*101);
let c = parseInt(Math.random()*101);
let resultado = a * x * x + b * x + c;

console.log(x,a,b,c,resultado);

document.getElementById("elX").textContent = `O valor de X é: ${x}`;
document.getElementById("elA").textContent = `O valor de A é: ${a}`;
document.getElementById("elB").textContent = `O valor de B é: ${b}`;
document.getElementById("elC").textContent = `O valor de C é: ${c}`;
document.getElementById("elResultado").textContent = `O valor da equação Ax2 + Bx + C é: ${resultado}`;
