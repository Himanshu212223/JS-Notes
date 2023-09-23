const fs = require('fs') ;
const http = require('http') ;

const server = http.createServer() ;

server.on("request", (request, response)=>{
    if(request.url === '/stream'){
        const rstream = fs.createReadStream('MyFile.txt') ;

        rstream.on('data', (chunkData)=>{
            response.writeHead(200, {"Content-type":"text/html"})
            response.write(chunkData);
        }) ;

        rstream.on('end', ()=>{
            response.writeHead(200, {"Content-type":"text/html"})
            response.end();
        }) ;

        rstream.on('error', (err)=>{
            response.writeHead(404, {"Content-type":"text/html"})
            response.end(`404, Data Not found, ${err}`) ;
        }) ;
    }
    else{
        response.writeHead(202, {'Content-type' : 'text/html'}) ;
        response.end("404 - Cannot Fetch Data on this sub-URL .") ;
    }
}) ;

const port = 5492, localHost = '127.0.0.1' ;

server.listen(port, localHost, ()=>{
    console.log(`Your Port is listening on localhost:${port}`) ;
}) ;