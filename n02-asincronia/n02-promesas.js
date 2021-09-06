const hola = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Hola ${nombre}`);
            resolve(nombre);
        }, 3000);
    });
};

const hablar = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bla bla bla bla bla bla bla bla bla...');
            // resolve(nombre);
            reject('Se ha producido un error');
        }, 1000);
    });
};

const adios = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Adios ${nombre}`);
            resolve();
        }, 2000);
    });
};

console.log('Iniciando proceso...');
hola('Javi')
    // .then((nombre) => {
    //     return adios(nombre);
    // })
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Terminando proceso...');
    })
    .catch((err) => {
        // console.error('Ha habido un error');
        console.error(err);
    });
