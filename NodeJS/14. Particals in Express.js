const express = require('express') ;
const path = require('path') ;
const hbs = require('hbs') ;

const app = express() ;

const partialPath = path.join(__dirname, '/partials') ;

app.set('view engine', 'hbs') ;
hbs.registerPartials(partialPath) ;

app.get('/', (request, response)=>{
    response.render('index', {
        userName : 'Anubhav',
    }) ;
}) ;

app.get('/about', (request, response)=>{
    response.render('about') ;
}) ;


//  If the user goes to some page which actually doesnot exist, then, we can use this to tackle that problem.
app.get('*', (request, response)=>{
    response.send('404... page not Found.') ;
}) ;


const port = 5612 ;
app.listen(port, ()=>{
    console.log(`Your Server is listening on localhost:${port}`) ;
}) ;