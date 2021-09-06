const hola = async (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Hola ${nombre}`);
            resolve(nombre);
        }, 3000);
    });
};

const hablar = async (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bla bla bla bla bla bla bla bla bla...');
            resolve(nombre);
            // reject('Se ha producido un error');
        }, 1000);
    });
};

const adios = async (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Adios ${nombre}`);
            resolve();
        }, 2000);
    });
};

const main = async () => {
    const nombre = await hola('Javi');
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
};

console.log('Iniciando proceso...');
main();
console.log('Terminando proceso...');
