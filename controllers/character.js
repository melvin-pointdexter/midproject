import express from 'express';
const router = express.Router();
import fetch from 'node-fetch';

router.get('/:id', async(req,res)=>{
    const id = req.params.id;
    const url = `https://www.breakingbadapi.com/api/characters/${id}`;
    const data_response = await fetch(url, {method:'get'});
    const data  = await data_response.json();
    
    res.render('character', {
        data: data
    });
});

//<%if (data[0].status=='Alive') {='green'} else {='red' }%>

export default router;