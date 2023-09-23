const fs = require('fs') ;
const http = require('http') ;

const server = http.createServer() ;

server.on('request', (request, response)=>{
    const rstream = fs.createReadStream('MyFile.txt') ;

    if(request.url === '/stream'){
        rstream.pipe(response) ;
    }
    else{
        response.writeHead(404, {'Content-type' : 'text/http'}) ;
        response.end("404  - Use '/stream' to fetch the data. ") ;
    }
}) ;

const port = 3489, localHost = '127.0.0.1' ;

server.listen(port, localHost, ()=>{
    console.log(`Your Server is listening on localhost:${port}`) ;
}) ;