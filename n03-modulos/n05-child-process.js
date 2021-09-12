/*
El módulo de procesos secundarios de Node.js (child_process) tiene dos funciones spawn y exec, mediante las cuales podemos iniciar un proceso secundario para ejecutar otros programas en el sistema.

La diferencia más significativa entre child_process.spawn y child_process.exec está en lo que spawn devuelve un stream y exec devuelve un buffer.

    Usa spawn cuando quieras que el proceso hijo devuelva datos binarios enormes a Node.
    Usa exec cuando quieras que el proceso hijo devuelva mensajes de estado simples.
    Usa spawn cuando quieras recibir datos desde que el proceso arranca.
    Usa exec cuando solo quieras recibir datos al final de la ejecución.
*/

const { exec, spawn } = require('child_process');
// const  exec = require('child_process').exec;

// exec('ls -lha', (err, stdout, stderr) => {
// exec('node n03-modulos/n03-console.js', (err, stdout, stderr) => {
//     if (err) {
//         console.error(err);
//         return false;
//     }

//     console.log(stdout);
// });

let proceso = spawn('ls', ['-lha']);
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', (data) => {
    console.log('¿Está muerto el proceso?');
    console.log(proceso.killed);
    console.log(data.toString());
});
proceso.on('exit', () => {
    console.log('¿Está muerto el proceso?');
    console.log(proceso.killed);
    console.log('El proceso terminó');
});

const ip = '8.8.8.8';

const ping = (address) => {
    return new Promise((resolve, reject) => {
        exec(`ping ${address}`, (error, stdout, stderr) => {
            if (error) {
                reject(error);
            } else {
                resolve(stdout);
            }
        });
    });
};

ping(ip)
    .then((result) => console.log(result))
    .catch((error) => console.error('Ocurrió un error: ', error.message));
