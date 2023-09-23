// to install express, use npm install express

const express = require('express') ;

const app = express() ;

app.get('/', (request, response)=>{
    response.send("Welcome to the first Response Generated by Express.JS");
}) ;

app.get('/about', (request, response)=>{
    response.send(`
        This Page is hosted using Express JS.<br>
        This is just for the Beginners.
    `) ;
}) ;

const port = 6743, localHost = '127.0.0.1' ;

app.listen(port, ()=>{
    console.log(`Your server is listening on port localhost:${port}`) ;
}) ;