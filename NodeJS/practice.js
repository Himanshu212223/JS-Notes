// http://api.weatherstack.com/current?access_key=6c759e1f053b320e84924f9d7e9ad6da&query=Lucknow

const http = require('http') ;
const requests = require('requests') ;



const server = http.createServer((request, response)=>{
    const api = 'http://api.weatherstack.com/current?access_key=6c759e1f053b320e84924f9d7e9ad6da&query=Lucknow' ;

    requests(api).on('data',(chunkData)=>{
        const objData = JSON.parse(chunkData) ;
        let arr = [objData] ;
        console.log(arr[0].current.temperature) ;
        let val = arr[0].current.temperature ;
    });
    
    requests(api).on('end', (error)=>{
        console.log(error) ;
    }) ;
    response.end("reached here.") ;
}) ;


const port = 6543, localHost = '127.0.0.1' ;

server.listen(port, localHost, ()=>{
    console.log(`Your Server is listening on localhost:${port}`)
}) ;