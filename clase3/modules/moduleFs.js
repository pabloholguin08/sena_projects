const fs = require('fs');
const os = require('os')

// //leer el contenido de un archivo
// const dato = fs.readFileSync('../../inicio.txt','utf-8');
// console.log(dato);

// const tue = fs.readFileSync('../../inicio.txt');
// console.log(tue.toString());

//Crear archivo y crea contenido
// const n= "sad";
// fs.writeFileSync('../../ejemplo.txt',n);

const hola ="adios";
fs.writeFileSync('../ejemplo.js',hola,{
     flag: 'a', //agregar
});

// const ramDisponibleGb = valor =>{
//     valor = valor*(Math.pow(10,-9));
//     return valor;
// }
// const procesador = os.cpus().slice(0,1).map((registro) => registro.model)
// let memoriaTotal = ramDisponibleGb(os.totalmem());
// const version =os.version();
// const usuario = os.userInfo().username;


// const fin = (`Usuario: ${usuario} \n Procesador: ${procesador} \n Memoria: ${memoriaTotal} \n Version:${version}`).toString()

// fs.writeFileSync('../ejemplo.js', fin)

// for(let i=1;i<=;i++){
//     const hola = i+`\n`;
//     fs.writeFileSync('../../ejemplo.js',hola,{
//     flag: 'a', //agregar
// });
// }



// fs.readFile('../on.js','utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
// })
