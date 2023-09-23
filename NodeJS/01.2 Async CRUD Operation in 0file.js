/*
    Asynchronous Way of File Handling :

    -   Every Asynchronous Method needs a callBack funtion in its argument.
        CallBack function is nothing but a method which is going to be get executed when the Async method gets executed.
*/

const fs = require('fs') ;

let text = "This is the text going to be stored in the file." ;

//  CREATE FOLDER
fs.mkdir('MyFiles', (error)=>{
    if(error){
        console.log(error) ;
    }
}) ;

//  CREATE
let content = "This is the sentence going to be inserted in the file." ;
fs.writeFile('MyFiles/MyText.txt', content, (error)=>{
    console.log('Done Creating and Appending text in it.') ;
    console.log(error) ;
}) ;

//  READ
fs.readFile('MyFiles/MyText.txt', 'utf-8', (error, data)=>{
    console.log(data) ;
    console.log(error) ;
}) ;

//  UPDATE
content = "\nThis is the sentence going to be inserted in the next line." ;
fs.appendFile('MyFiles/MyText.txt', content, (error)=>{
    console.log('Done Creating and Appending text in it.') ;
    console.log(error);
}) ;

//  DELETE FILE
fs.unlink('MyFiles/MyText.txt', (error)=>{
    console.log("Done Deleting the File.") ;
    console.log(error) ;
}) ;

//  DELETE FOLDER
setTimeout(()=>{
    fs.rmdir('MyFiles', (error)=>{
        console.log('Done Deleting the Folder.') ;
        console.log(error) ;
    }); 
},3000);