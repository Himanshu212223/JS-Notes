const express = require('express') ;

const app = express() ;

app.get('/', (request, response)=>{
    response.send('This is response generated for HOME.') ;
}) ;

app.get('/about', (request, response)=>{
    response.send('This is response generated for ABOUT.') ;
}) ;

app.get('/contact', (request, response)=>{
    response.send('This is response generated for CONTACT.') ;
}) ;

app.get('/json', (request, response)=>{
    response.send({
        key1 : "value1" ,
        key2 : "value2"
    }) ;

    //  passing the js object which automatically gets converted into json model. 
}) ;

app.get('/jsons', (request, response)=>{
    response.json([
        {
            key1 : 'value1' ,
            key2 : 'value2'
        },
        {
            key3 : 'value3' ,
            key4 : 'value4'
        }
    ]);
}) ;

const port = 6543 ;
app.listen(port, ()=>{
    console.log(`Your server is listening on localhost:${port}`) ;
}) ;