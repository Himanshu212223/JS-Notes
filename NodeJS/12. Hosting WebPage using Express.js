const express = require('express') ;

const app = express() ;

const staticPathOfIndexHTML = __dirname ;   //  getting the localtion of index.html file.

//  it is a builtin Middle Ware.
//  it is used to identify which index.html file we are expecting.
app.use(express.static(staticPathOfIndexHTML)) ;

app.get('/home', (request, response)=>{
    response.send("Welcome to Home page. ") ;
}) ;

const port = 2398 ;

app.listen(port, ()=>{
    console.log(`Your Server is listening on port localhost:${port}`) ;
}) ;