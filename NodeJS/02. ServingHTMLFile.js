const fs = require("fs") ;
const http = require("http") ;

let fileContent = null ;

fs.readFile("index.html", (error, data)=>{
    fileContent = data ;
}) ;

const server = http.createServer((request, response)=>{
    response.writeHead(200, {'Content-type' : 'text/html'});
    response.end(fileContent) ;
});

let port = 8001 ;

server.listen(port, '127.0.0.1', ()=>{
    console.log(`Server is Running on 127.0.0.1:${port}, you can copy paste this url. `) ;
}) ;