/* 
    Reading, Creating a File using Node JS.
*/

const fs = require("fs") ;

let text = `This is the text we want to write in a newly created File named with MyText.txt.` ;

//  Creating A File.
fs.writeFileSync("MyText.txt", text) ;

//  Reading a file.
let reading = fs.readFileSync("MyText.txt", "utf-8") ;

console.log(reading) ;

let text2 = "\nThis is going to stored in the same file." ;
fs.appendFileSync("MyText.txt", text2) ;


//  ------------------------ Asynchronous FS 

//  readFile(path, decryption, callbackMethod) ;
fs.readFile("MyText.txt", "utf-8", (error, data)=>{
    let fileContent = data ;
    console.log(data) ;
}) ;

/*
        OR
fs.readFile("MyText.txt", (error, data)=>{
    let bufferData = data ;
    let actualData = bufferData.toString();
    console.log(actualData) ;
}) ;
*/

console.log("The content of the File is : ") ;