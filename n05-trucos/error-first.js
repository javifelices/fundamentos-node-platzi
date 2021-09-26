const asincrona = (callback) => {
    setTimeout(() => {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch (error) {
            // callback(error, null);
            callback(error);
        }
    }, 1000);
};

asincrona((error, data) => {
    if (error) {
        console.error('Tenemos un error');
        console.error(error);
        return false; // Buena práctica para detener la ejecución
    }
    console.log(`Todo ha ido bien, mi data es ${data}`);
});

/*
    Para las funciones asíncronas el patrón throw no va a funcionar
    Para las funciones síncronas viene muy bien.
*/

// try {
//     asincrona((error, data) => {
//         if (error) {
//             throw error;
//         }
//         console.log(`Todo ha ido bien, mi data es ${data}`);
//     });
// } catch (error) {
//     console.error('Se ha capturado el error');
//     console.error(error);
// }
