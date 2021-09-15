/*
⚠️ Atención uncaughtException no esta diseñado para remplazar el manejo de errores que debería de tener tu aplicación y debería ser tu últmo recurso para tratar de manejar errores⚠️

uncaughtException es un mecanismo crudo para manejar errores. Sobreescribira la manera por default en que Node maneja un error que no tiene ningun catch de errores. Tratar de resumir normamlente una uncaught exception puede corromper completamete tu programa. Su uso correcto es hacer operaciones sincronas para limpiar recursos antes de apagar el proceso. No resumir el programa.


El objecto process es una instancia de EventEmitter; podemos suscribirnos a el para escuchar eventos de node.

UncaughtException: Permite capturar cualquier error que no fue caputurado previamente.

exit: Se ejecuta cuando node detiene el eventloop y cierra su proceso principal.
*/

process.on('beforeExit', () => console.log('El proceso va a terminar'));

/*
Este evento se dispara cuando el proceso ya ha terminado. Si hay un proceso asíncrono dentro del evento exit, nunca se va a ejecutar, y eso puede llegar a ser un foco de problemas
*/
process.on('exit', () => {
    console.log('El proceso acabó');
    setTimeout(() => {
        console.log('Esto no aparecerá nunca porque nos hemos desconectado');
    }, 0);
});

setTimeout(() => {
    console.log('Esto sí aparecerá al estar fuera de exit');
}, 0);

/*
Es muy util capturar una excepcion, para evitar que se pare todo el proceso
*/
process.on('uncaughtException', (err, origen) => {
    console.error('No se ha capturado el error');
    console.error(err);
    console.error(err.message);
    setTimeout(() => {
        console.log('Viene de las excepciones');
    }, 0);
});

try {
    funcionQueNoExiste();
} catch (error) {
    console.error(error.message);
}

console.log('Al no recoger el error, no aparece');


/************************************/

// let x = -1;
// process.on('beforeExit', () => {
//     setTimeout(() => {
//         if (x) {
//             console.log('El Proceso va a terminar');
//             console.log('Esta funcion asíncrona se va a repetir…');
//             x++;
//         } else {
//             console.log('Y repetir…');
//         }
//     }, 2000);
// });

/*
beforeExit no cierra el Hilo Principal, por lo que al detectar el evento y ejecutar la función asíncrona, el final del Hilo Principal se va a “posponer” para darle tiempo de concluir la función en el Thread Pool. Esto provocará que el evento beforeEnd se dispare nuevamente, haciendo que la función asíncrona se ejecute otra vez…y ciclando la aplicación.
*/
