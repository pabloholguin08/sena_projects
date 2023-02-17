let ramDisponibleMb = valor =>{
    megas= valor*(Math.pow(10,-6))
    return megas
}

let ramDisponibleGb = valor =>{
    megas= valor*(Math.pow(10,-9))
    return megas
}

module.exports={ramDisponibleGb,ramDisponibleMb}