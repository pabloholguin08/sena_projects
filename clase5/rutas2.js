const {Router} = require('express')
const router = Router()

router.get('/views',(req,res)=>{
    res.send("Hola");
})

module.exports = router