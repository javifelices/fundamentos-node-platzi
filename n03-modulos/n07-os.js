const os = require('os');

// Arquitectura
console.log('Arquitectura');
console.info(os.arch());
console.log();

// Plataforma
console.log('Plataforma');
console.info(os.platform());
console.log();

// CPUS
console.log('CPUS');
console.table(os.cpus());
console.log();

// Errores del sistema
console.log('Errores y señales del sistema');
console.info(os.constants);
console.log();

const SIZE = 1024;

const kb = (bytes) => bytes / SIZE;
const mb = (bytes) => kb(bytes) / SIZE;
const gb = (bytes) => mb(bytes) / SIZE;

// Memoria libre
console.log('Memoria libre en el sistema');
console.info(`${os.freemem()} bytes`);
console.info(`${kb(os.freemem()).toFixed(3)} KB`);
console.info(`${mb(os.freemem()).toFixed(3)} MB`);
console.info(`${gb(os.freemem()).toFixed(3)} GB`);
console.log();

// Memoria libre
console.log('Memoria disponible en el sistema');
console.info(`${gb(os.totalmem()).toFixed(3)} GB`);
console.log();

// Directorio raíz del usuario principal
console.log('Directorio raíz del usuario');
console.info(`${os.homedir()}`);
console.log();

// Directorio temporal del sistema
console.log('Directorio temporal del sistema');
console.info(`${os.tmpdir()}`);
console.log();

// Hostname
console.log('Hostname');
console.info(`${os.hostname()}`);
console.log();

// Interfaz de red
console.log('Interfaz de red');
console.table(os.networkInterfaces());
console.log(os.networkInterfaces());
console.log();
