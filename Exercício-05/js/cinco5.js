let base = parseInt(Math.random() * 101);
let altura = parseInt(Math.random()* 101);
let area = (base * altura) / 2;

console.log(base, altura, area);

document.getElementById("elBase").textContent = `Base do Triângulo: ${base}`;
document.getElementById("elAltura").textContent = `Altura do Triângulo: ${altura}`;
document.getElementById("elArea").textContent = `Área do Triângulo: ${area}`;