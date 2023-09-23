const fs = require('fs') ;

//  creating folder in which we want to create and store a file.
fs.mkdirSync('Files') ;

//  Create
//  writing the content which is going to be stored in text file.
let content = "Welcome to text file present inside Files." ;

//  Update
//  storing the content using append.
fs.appendFileSync('Files/NewTextFile.txt', content) ;

//  Read
let data = fs.readFileSync('Files/NewTextFile.txt', 'utf-8') ;

//  Rename
fs.renameSync('Files/NewTextFile.txt', 'Files/MyTextFile.txt') ;

//  Delete file
fs.unlinkSync('Files/MyTextFile.txt') ; 

//  Delete folder
fs.rmdirSync('Files') ;