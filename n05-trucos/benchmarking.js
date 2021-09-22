console.time('TODO');
let suma = 0;
let suma2 = 0;

console.time('Tiempo bucle');
for (let i = 0; i < 1000; i++) {
    suma++;
}
console.timeEnd('Tiempo bucle');

console.time('Tiempo bucle 2');
for (let j = 0; j < 1000; j++) {
    suma2 = suma2 + j;
}
console.timeEnd('Tiempo bucle 2');

const funcionAsincrona = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Termino proceso asíncrono');
            resolve();
        }, 1000);
    });
};

console.time('asincrono');
funcionAsincrona().then(() => {
    console.timeEnd('asincrono');
});

console.timeEnd('TODO');
