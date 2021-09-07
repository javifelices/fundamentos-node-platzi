let i = 0;
let interval = setInterval(() => {
    console.log('Soy un intervalo');
    if (i === 5) {
        clearInterval(interval);
    }
    i++;
}, 1000);

setImmediate(() => {
    console.log('Soy inmediato');
});

// console.log(process);

console.log(__dirname);
console.log(__filename);

// Si no es estrictamente necesario, no creemos variables globales
global.miVariable = 'Soy un global creador por mí';
console.log(miVariable);

console.log(this === global);
