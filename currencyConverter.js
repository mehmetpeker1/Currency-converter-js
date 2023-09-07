const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const tasaCambio = 0.85;
console.log('Bienvenido al Convertidor de Moneda');
console.log('Este programa convierte una cantidad en dólares a euros.');
rl.question('Ingrese la cantidad en dólares: ', (cantidadDolares) => {
    const dolares = parseFloat(cantidadDolares);
    const euros = dolares * tasaCambio;
    console.log(`${dolares} dólares son equivalentes a ${euros.toFixed(2)} euros.`);
    rl.close();
});
