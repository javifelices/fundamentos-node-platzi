console.log();
console.log('console.info');
console.info('Texto con propósito informativo');

console.log();
console.log();
console.log('console.warn');
console.warn('Muestra un mensaje de advertencia');

console.log();
console.log();
console.log('console.error');
console.error('Muestra un mensaje de error');

console.log();
console.log();
console.log('console.assert');
console.assert(false, 'Este mensaje se muestra porque el primer argumento es false');
console.assert(true, 'Este mensaje NO se mostrará porque el primer argumento es true');

console.log();
console.log();
console.log('console.count');
console.count(3);
console.count(7);
console.log('Ya se tiene un conteo para 3 y 7');
for (let i = 0; i < 10; i++) {
    console.count(i);
}
console.count('Veces');
console.count('Veces');
console.count('Veces');
console.countReset('Veces');
console.count('Veces');
console.count('Veces');

console.log();
console.log();
console.log('console.dir');
const specs = {
    ram: 'HyperX FURY DDR4 8GB',
    processor: 'Intel i7 8700K',
    hdd: "Seagate Barracuda 3.5'', 1TB",
};
console.dir(specs);

console.log();
console.log();
console.log('console.group');
console.group('Mensajes agrupados');
console.log('Log');
console.info('Info');
console.groupEnd();

console.log();
console.log();
console.log('console.group');
const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
console.group('diasSemana');
for (let i = 0; i < dias.length; i++) {
    console.log(dias[i]);
}
console.groupEnd('diasSemana');

console.log();
console.log();
console.log('console.clear');
// console.clear()
// Límpia la consola
function limpiarConsola() {
    setTimeout(() => {
        console.clear('Limpiando cada 5 segs');
    }, 15000);
}
limpiarConsola();

console.log();
console.log();
console.log('console.time');
console.time();
for (let i = 0; i < 10; i++) {
    console.count(i);
}
console.timeEnd();

console.log();
console.log();
console.log('console.time');
console.time('100-elementos');
for (let i = 0; i < 100; i++) {}
console.timeEnd('100-elementos');

console.log();
console.log();
console.log('console.table');
const books = [
    { book: 'Story of Your Life', author: 'Ted Chiang' },
    { book: 'The last answer', author: 'Isaac Asimov' },
    { book: 'do androids dream of electric sheep?', author: 'Philip K. Dick' },
];
console.table(books);
