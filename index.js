import express from 'express';
import bparser from 'body-parser';

const app = express();

app.use(bparser.urlencoded({extended:false}));
app.use(bparser.json());

//app sets the view engine (what type of file we use for viewing) to ejs
app.set('view engine', 'ejs');
//app sets the view folder to where the view folder is (so when we write 'characters' it goes to the view folder and finds characters.ejs)
app.set('views','views');

//characters controller (when user reaches /characters, go to characters.js)
import charactersRoute from './controllers/characters.js';
app.use('/characters',charactersRoute);


//episodes controller (when user reaches /episodes, go to episodes.js)
import  episodesRoute from './controllers/episodes.js';
app.use('/episodes',episodesRoute);


//quotes controller (when user reaches /quotes, go to quotes.js)
import quotesRoute from './controllers/quotes.js';
app.use('/quotes', quotesRoute);


//character controller
import characterRoute from './controllers/character.js';
app.use('/character',characterRoute);


const port=3000;
app.listen(port,function(){
    console.log(`${port} is w0rking`);
});
