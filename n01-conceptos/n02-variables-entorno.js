/*
- Se declaran como: process.env.NOMBRE_VARIABLE en el archivo JS
- Para llamarla en BASH (GITBASH por ejemplo) sería: NOMBRE=Roberto node archivo.js
- Se pueden poner varias al mismo tiempo: NOMBRE=x APELLIDO=z node archivo.js (Con un espacio se separan)
- En windows primero se hace: SET NOMBRE_VARIABLE=VALOR
  Luego: node archivio.js
- Para ponerle un valor por DEFAULT: process.env.NOMBRE_VARIABLE || 'Valor por default' en el archivo JS
- Las variables de entorno se ponen en mayúsculas (viene desde que se usaban en servidores Linux)
*/

let nombre = process.env.NOMBRE || 'Sin nombre';
let web = process.env.WEB || 'No tengo web'
console.log(`Hola ${nombre}
mi web es ${web}`);
