const http = require('http') ;

const server = http.createServer((request, response)=>{
    if(request.url == '/'){
        response.writeHead(200, {"Content-type" : 'text/html'}) ;               //  Status Code.
        response.end("..... Hii.., This is the HomePage ..............");
    }
    else if(request.url == '/about'){
        response.writeHead(200, {"Content-type" : 'text/html'}) ;               //  Status Code.
        response.end("..... This is the About Page ..............");
    }
    else{
        response.writeHead(404, {"Content-type" : 'text/html'}) ;               //  Status Code.
        response.end("<h1> !!!!! Bad Request !!!! </h1>");
    }
}) ;

const port = 8765 ;
const localHost = '127.0.0.1' ;

server.listen(port, localHost, ()=>{
    console.log(`Your Server is listening at localhost:${port}`) ;
}) ;