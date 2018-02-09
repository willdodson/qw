const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();
const controller = require('./controller'); 

const app = express();
app.use( bodyParser.json() );
app.use( cors() );

massive( process.env.CONNECTION_STRING ).then( dbInstance => {
    app.set('db', dbInstance) 
});

app.get( '/api/shelf/:id', controller.read );
app.get( '/api/bin/:id', controller.read );
app.put( '/api/bin/:id', controller.update );
app.delete( '/api/bin/:id', controller.delete );
app.post( '/api/bin/:id', controller.add );


const port = process.env.PORT || 4000;
app.listen( port, () => { console.log(`Server listnin on port ${port}.`); } );
