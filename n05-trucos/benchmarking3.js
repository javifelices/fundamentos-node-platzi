console.time(`All code`);

console.time(`process`);
let sum = 0;
for (let i = 0; i < 10; i++) {
    sum += 1;
}
console.timeLog(`process`, sum);

/* Asincrono */
console.log('Aquí comienza asíncrono');

function startup() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Petición 1');
            resolve();
        }, 4000);
    });
}
console.time(`startup`);
startup()
    .then((res) => console.timeLog(`startup`))
    .catch((err) => console.timeLog(`startup`));

console.timeEnd(`All code`);
