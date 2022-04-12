import express from 'express';
const router = express.Router();
import fetch from 'node-fetch';

router.get('/', async(req,res)=>{
    const url = "https://www.breakingbadapi.com/api/characters";
    const data_response = await fetch(url, {method:'get'});
    const data  = await data_response.json();
    
    res.render('characters', {
        data: data
    });
});

export default router;