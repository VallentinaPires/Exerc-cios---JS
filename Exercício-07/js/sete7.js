let peso = parseInt(Math.random() * 201);
let emagrecer = peso - (peso * 20/100);
let engordar = peso + (peso *20/100);

console.log(peso, emagrecer, engordar);

document.getElementById("elPeso").textContent = `Peso (em kg): ${peso}`;
document.getElementById("elEmagrecer").textContent = `Peso após emagrecimento (20%): ${emagrecer}`;
document.getElementById("elEngordar").textContent = `Peso após ganho de peso (20%): ${engordar}`;

