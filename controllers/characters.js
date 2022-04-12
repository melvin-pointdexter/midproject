const express = require('express');
const router = express.Router();

router.get('/', async(req,res)=>{
    const url = "/api/characters";
    const data_response = await fetch(url, {method:'get'});
    const data  = await data_response.json();
    
    res.render('characters', {
        data: data
    });
});

module.exports = router;