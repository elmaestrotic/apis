const {Router} = require('express');
const router =Router();

router.get('/test', (req,res)=>{
    const data ={
        "name": "Alexander",
        "apellido": "Narváez"
    }
    res.json(data);
});

module.exports = router