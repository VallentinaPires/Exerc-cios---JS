let horasTrabalhadas = parseInt(Math.random() * 251);
let dependentes = parseInt(Math.random()* 7);
let salario = (160 *horasTrabalhadas) + (80 * dependentes);
let inss = salario * 85/1000;
let ir = salario * 5/100;
let salarioFinal = salario - (inss + ir);

console.log(horasTrabalhadas,dependentes, salario, inss, ir, salarioFinal);

document.getElementById ("elSalario").textContent = `Salário Bruto (sem desconto): ${salario}`;
document.getElementById("elIr").textContent = `Desconto de IR: ${ir}`;
document.getElementById("elInss").textContent = `Desconto do INSS: ${inss}`;
document.getElementById("elSalarioFinal").textContent = `Salário Final: ${salarioFinal}`;