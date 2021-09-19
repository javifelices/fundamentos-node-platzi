/*
Son datos cifrados en hexadecimal ubicados en RAM, es decir que son volátiles (temporales).

Los Buffers en consola se representan cómo números base 16 ó hexadecimales. Es importante tener en cuenta que las letras en Hex representan un número más y no tienen relación con el abecedario.

Para encontrar el valor de un número hex, por ejemplo E7, multiplicamos el valor del primer digito 16 veces y sumamos el segundo valor y el resultado de la operación es el valor del hex en números decimales.

E7 = 231
61 = a

Con la función toString() node toma el valor del buffer y lo convierte al simbolo que represente en la tabla ascii.
*/

// const buffer = Buffer.alloc(1);
// const buffer = Buffer.from([1, 2, 3]);
const buffer = Buffer.from('Hola');

console.log(buffer);
// console.log(buffer.toString()); // Hola

const abecedario = Buffer.alloc(26);
// console.log(abecedario);

for (let i = 0; i < 26; i++) {
    abecedario[i] = i + 97; // 97 es el carácter ASCII de la letra A
}

console.log(abecedario);
console.log(abecedario.toString());

// Conversión de bases en4 JS. Usando toString()

const decimal = 32;
const binario = decimal.toString(2); // 100000
const octal = decimal.toString(8); // 40
const hexa = decimal.toString(16); // 20 --> 0x20
console.log(decimal);
console.log(binario);
console.log(octal);
console.log(hexa);
