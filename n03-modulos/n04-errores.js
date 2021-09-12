const otraFuncion = () => {
    seRompe();
};

const seRompe = () => {
    return 3 + z;
};

const seRompeAsincrona = (callback) => {
    setTimeout(() => {
        try {
            return 3 + z;
        } catch (error) {
            console.error('Error en mi función asíncrona');
            console.error(error.message);
            callback(error);
        }
    });
};

try {
    // otraFuncion();
    seRompeAsincrona((error) => {
        console.error(error.message);
    });
} catch (error) {
    console.error('Vaya, algo se ha roto');
    console.error(error);
    console.error(error.message);
    console.info('Pero no pasa nada, hemos capturado el error');
}

console.log('Esto de aquí está al final');
