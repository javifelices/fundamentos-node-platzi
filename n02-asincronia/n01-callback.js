const hola = (nombre, miCallback) => {
    setTimeout(() => {
        console.log(`Hola ${nombre}`);
        miCallback(nombre);
    }, 3000);
};

const hablar = (callbackHablar) => {
    setTimeout(() => {
        console.log('Bla bla bla bla bla bla bla bla bla...');
        callbackHablar();
    }, 1000);
};

const adios = (nombre, otroCallback) => {
    setTimeout(() => {
        console.log(`Adios ${nombre}`);
        otroCallback();
    }, 2000);
};

const conversacion = (nombre, veces, callback) => {
    if (veces > 0) {
        hablar(() => {
            conversacion(nombre, --veces, callback);
        });
    } else {
        adios(nombre, callback);
    }
};

console.log('Iniciando proceso...');
hola('Javi', (nombre) => {
    conversacion(nombre, 3, () => {
        console.log('Terminando proceso...');
    });
});
//     hablar(() => {
//         hablar(() => {
//             hablar(() => {
//                 adios(nombre, () => {
//                     console.log('Terminando proceso...');
//                 });
//             });
//         });
//     });
// });

// hola('Javi', () => {});
// adios('Javi', () => {});
