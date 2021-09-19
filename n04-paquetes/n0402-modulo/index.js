/*
Node soporta los módulos de la sintáxis ES6 solo hay que agregar esta linea en el package.json "type": “module”, y con esto ya se podrá trabajar con los archivos en extensión .js en lugar de .mjs
*/

// const modulo = require('./modulo'); // Antes de ES6
import modulo from './modulo.js';

// console.log(modulo);
// console.log(modulo.saludar);
console.log(modulo.prop1);
// console.log();
// modulo();
modulo.saludar();
