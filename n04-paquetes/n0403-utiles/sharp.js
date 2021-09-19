/*********
 * sharp *
 *********/

const sharp = require('sharp');

// sharp('original.png').resize(80).grayscale().toFile('original-resized80.png');

sharp('original.png').resize(80).toFile('original-resized80.png');
sharp('original.png').resize(300).toFile('original-resized300.png');
sharp('original.png').grayscale().toFile('original-grayscale.png');
sharp('original.png').rotate(90).toFile('original-rotate.png');

const convert = (ruta, size, name) => {
    sharp(ruta)
        .resize(size)
        .toFile(`${name}.png`, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('Proceso realizado con éxito');
            }
        });
};

convert('original.png', 80, 'original-80');
