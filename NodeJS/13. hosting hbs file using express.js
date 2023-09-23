/*
    HBS stands for HandleBars.
    It is a framework which is used to write the same html file content, but provides some more features.
    The index.hbs file which contains the html content should always be stored in views directory/folder.
*/

const express = require('express') ;

const app = express() ;

app.set('view engine', 'hbs') ;

app.get('/', (request, response)=>{
    response.render('index', {
        userName : 'Anubhav',
    }) ;
}) ;

app.get('/home', (request, response)=>{
    response.send("Welcome to Home page. ") ;
}) ;

const port = 2398 ;

app.listen(port, ()=>{
    console.log(`Your Server is listening on port localhost:${port}`) ;
}) ;