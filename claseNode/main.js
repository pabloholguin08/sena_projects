let cargarDatosPersona = require('./modules/datosPersona.js');
let cargarDatosCargo = require('./modules/datosCargo.js');


let personasCantidad = (personas,cargos)=>{
    let claves =Object.keys(personas);
    let claves2=Object.keys(cargos)
    for (let i=0; i<claves.length;i++){
    
    
        let resultado2= Math.floor(Math.random()* claves.length);
        
        auxClave1=claves[resultado2];
        let resultado= Math.floor(Math.random()* claves.length);
        
        auxClave2=claves2[resultado]
        console.log(Object.values(cargarDatosCargo[auxClave2]))
        console.log(Object.values(cargarDatosPersona[auxClave1])) 
        console.log("------------------------------------------------------------------------------------------------------------")
    }

      
}

personasCantidad(cargarDatosPersona,cargarDatosCargo);