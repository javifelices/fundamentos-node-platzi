/*
El File System es uno de los módulos principales que nos ofrece Node, este modulo es aquel que nos permite operar directamente con los archivos de nuestro sistema, permitiéndonos crear, leer, editar o eliminar archivos de nuestra índole.
Es mu importante tener en cuenta que la mayoría de métodos de este modulo son asíncronos, pero también nos ofrecen su versión síncrona, la cual es muy poco recomendable a la hora de usar ya que puede bloquear el evento loop de Node.
Para poder usar este modulo lo debemos importar con require en una constante con el mismo nombre del módulo:

    Const fs = require(‘fs’);
    Una vez importado podremos comenzar a usar los métodos que este módulo nos ofrece:
    Fs.readFile(path, callback);
    Fs.writeFile(path, content, callback)
    Fs.unlink(path, callback)
*/

const fs = require('fs');

const leer = (ruta, callback) => {
    fs.readFile(ruta, (err, data) => {
        callback(data.toString());
    });
};

const escribir = (ruta, contenido, callback) => {
    fs.writeFile(ruta, contenido, (err) => {
        if (err) console.error('No he podido escribirlo', err);
        else console.log('Se ha escrito correctamente');
    });
};

const borrar = (ruta, callback) => {
    fs.unlink(ruta, callback);
};

// escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log)
// leer(`${__dirname}/archivo.txt`, console.log);
// leer(`${__dirname}/archivo1.txt`, console.log);
// borrar(__dirname + '/archivo1.txt', console.log);
// borrar(__dirname + '/archivo.txt', console.log);
