const {Router} = require('express')

const router = Router()

router.get("/help",(req,res)=>{
    res.render("home",{nombre: req.params.nombre})
})

router.get("/web/:nombre",(req,res)=>{
    res.render("web",{nombre:req.params.nombre})
})
module.exports=router;