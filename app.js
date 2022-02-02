const { options } = require('yargs');
const { createFile } = require('./helpers/multiplicar.js');  //importar el archivo creado
const argv = require('./config/yargs.js');
const colors = require('colors');

console.clear();

createFile(argv.b, argv.l, argv.h)
   .then(nameFile => console.log(nameFile.rainbow, 'creado'))
    .catch(err => console.log(err));

//const base = 5;
//const [, , arg3 = 'base=5'] = process.argv;
//const [, base=5] = arg3.split('=');

/*process.argv es una propiedad que devuelve un array que contiene los argumentos pasados al proceso cuando se ejecuta en la linea de comandos. El primer elemento es la ruta de ejecución del proceso y el segundo elemento es la ruta de archivos js */