const fs = require('fs'); //importar libreria
const colors = require('colors');

const createFile = async(base, listar = false, hasta) => {

    try{  
        let result = '';
        let consola = '';

        for(let i=1;i<=hasta;i++){
            result += `\t${base} x ${i} = ${base * i}\n`;
            consola += `\t${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        }
            
        if(listar){
            console.log('-----------------------------'.green);
            console.log(`       Tabla del ${base}    `.green);
            console.log('-----------------------------'.green);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, result);

        return `tabla-${base}.txt`;
    } catch(err){
        throw(err);
    }
}

module.exports = {
    createFile
}