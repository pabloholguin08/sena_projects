const path = require('path');

//Salida adecuada de acuerdo al sistema operativo
const fileJoin = path.join('consumible','/propiedades','etc.js');
console.log(fileJoin)

//Base de la ruta, final de la ruta
const fileBaseName = path.basename(fileJoin);
console.log(fileBaseName)

//Dir ruta sin archivo
const fileDirName = path.dirname(fileJoin)
console.log(fileDirName)


//Ruta en forma de objeto
const fileParse = path.parse(fileJoin)
console.log(fileParse)

//cOMPLETA LA RUTA DEL SISTEMA CON LA RUTA PROPORCIONADA
const fileResolve = path.resolve(fileJoin)
console.log(fileResolve)

console.log(path)
