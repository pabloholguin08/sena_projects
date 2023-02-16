const os = require('os');
const funciones = require('./funciones.js')

let mTotal = funciones.ramDisponibleGb(os.totalmem());
let mtotalmb = funciones.ramDisponibleMb(os.totalmem());
let mDisponiblegb  = funciones.ramDisponibleGb(os.freemem());
let mDisponiblemb = funciones.ramDisponibleMb(os.freemem());
let so = os.release();
// let procesadord = os.cpus().slice(0,1).map((registro)=>registro.times);

const datos={
    memoriaTotal : mTotal +"Gb" +", "+mtotalmb+"Mb",
     memoriaDisponible : mDisponiblegb+"Gb"+", "+mDisponiblemb+"Mb",
     sistemOperativo : os.release(),
     procesador:{
        user:os.cpus().slice(0,1).map((registro)=>registro.times.user),
        nice:os.cpus().slice(0,1).map((registro)=>registro.times.nice),
        sys:os.cpus().slice(0,1).map((registro)=>registro.times.sys),
        idle:os.cpus().slice(0,1).map((registro)=>registro.times.idle),
        irq:os.cpus().slice(0,1).map((registro)=>registro.times.irq)
     }
}

module.exports=datos;


