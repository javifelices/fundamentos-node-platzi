/*

STREAMS

Podría decirse que un Stream es el proceso de ir consumiendo datos al tiempo en que se reciben. Por ejemplo, cuando vemos un video en Youtube estamos consumiendo datos por medio de streaming (readable stream, porque solo podemos ver los videos mas no editarlos), ya que lo vemos al mismo tiempo en que este se está descargando, de lo contrario habría que esperar a que se descargue el video por completo para poder verlo.

Si en el caso anterior, mientras vemos el video, fallara el internet, así sea por un segundo, la reproducción se pararía instantáneamente. Pero sabemos que en realidad no es así, el video continúa reproduciéndose por un tiempo mas. Esto es gracias a la implementación de un buffer el cuál es un espacio en memoria ram en donde la información proveniente del servidor llega por fragmentos (chunks), para luego ser consumido, y como ese almacenamiento de datos en el buffer se hace a bajo nivel, de forma binaria, el proceso es mucho mas rápido de lo que se consume. Es por eso que cuando reproducimos un video en Youtube vemos que este se carga mas rápido. (dependiendo del ancho de banda claro está)

*/

const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

// stream de lectura
const readableStream = fs.createReadStream(__dirname + '/input.txt');

readableStream.setEncoding('utf8');
readableStream.on('data', (chunk) => {
    // console.log(chunk);
    // console.log(chunk.toString());
    data += chunk;
});

readableStream.on('end', () => {
    // console.log(data);
});

// stream de escritura
// process.stdout.write('Hola');
// process.stdout.write(' qué ');
// process.stdout.write(' tal');


const Transform = stream.Transform;

class Mayus extends Transform {
    _transform(chunk, encoding, callback) {
        const chunkMayus = chunk.toString().toUpperCase();
        this.push(chunkMayus);
        callback();
    }
}

const mayus = new Mayus();

readableStream.pipe(mayus).pipe(process.stdout);
