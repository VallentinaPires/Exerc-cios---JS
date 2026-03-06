let calcasVendidas = parseInt(Math.random() * 201);
let salario = 1500 + (35 * calcasVendidas);

console.log(calcasVendidas, salario);

document.getElementById("elCalcasVendidas").textContent = `Calças vendidas: ${calcasVendidas}`;
document.getElementById("elSalario").textContent = `Salário do vendedor: ${salario}`;