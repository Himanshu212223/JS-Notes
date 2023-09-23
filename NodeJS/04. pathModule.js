const path = require('path') ;

let directoryName = path.dirname('C:/Users/himanshu13140/Desktop/Complete Java Developer Course/NodeJS/4. pathModule.js') ;
let baseName = path.basename('C:/Users/himanshu13140/Desktop/Complete Java Developer Course/NodeJS/4. pathModule.js') ;
let extensionOfFile = path.extname('C:/Users/himanshu13140/Desktop/Complete Java Developer Course/NodeJS/4. pathModule.js') ;

console.log(`Your current directory is ${directoryName}, FileName is ${baseName} and extension is ${extensionOfFile}`) ;

//  to get all the required details collectively.
const myPath = path.parse('C:/Users/himanshu13140/Desktop/Complete Java Developer Course/NodeJS/4. pathModule.js') ;
console.log(myPath) ;
console.log(myPath.root) ;
console.log(myPath.dir) ;
console.log(myPath.base) ;
console.log(myPath.ext) ;
console.log(myPath.name) ;
