const express = require('express');
const  bparser = require('body-parser');

const app = express();

app.use(bparser.urlencoded({extended:false}));
app.use(bparser.json());

app.set('view engine', 'ejs');
app.set('views','views');

//characters controller
const charactersRoute = require('./controllers/characters');
app.use('/characters',charactersRoute);


//episodes controller
const episodesRoute = require('./controllers/episodes');
app.use('/episodes',episodesRoute);


//quotes controller
const quotesRoute = require('./controllers/quotes');
app.use('/quotes', quotesRoute);


const port=3001;
app.listen(port,function(){
    console.log(`${port} is w0rking`);
});
