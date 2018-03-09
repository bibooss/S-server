const express = require ('express');

const router = express.Router();


router.get('/register', (req,res,next)=>{

res.send('REGISTER');

});


router.post('/authenticate', (req,res,next)=>{

    res.send('LOGIN');

    });


    router.get('/maps', (req,res,next)=>{

        res.send('MAPS');

        });


module.exports = router;