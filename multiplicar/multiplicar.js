
// requires
const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {

    return new Promise( (resolve, reject) => {

        if(!Number(base)) {
            reject(`La base proporcionada (${base}) no es un numero.`.red);
            return;
        }

        if(!Number(limite)) {
            reject(`El limite proporcionado (${limite}) no es un numero.`.red);
            return;
        }

        let data = '';
        
        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base * index}\n`;
        }
        
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err.red)
            } else {
                resolve(`tabla-${base}.txt`.green);
            }
        });

    });

}

let listarTabla = (base, limite) => {

    return new Promise( (resolve, reject) => {

        if( !Number(base) ) {
            reject(`La base proporcionada (${base}) no es un numero.`.red);
            return;
        }

        if( !Number(limite) ) {
            reject(`El limite proporcionado (${limite}) no es un numero.`.red);
            return;
        }
       
        for (let index = 1; index <= limite; index++) {
            data = `${base} * ${index} = ${base * index}\n`;
            console.log(data.green);            
        }

        resolve(`Se listan ${limite} terminos de la tabla del ${base}`);
        
    });

}

module.exports = {
    crearArchivo,
    listarTabla
}