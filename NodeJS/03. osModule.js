const os = require('os') ;

let arch = os.arch() ;
let freeMemory = os.freemem() / 1024 / 1024 / 1024 ;     // to convert byte into gb.
let totalMemory = os.totalmem() / 1024 / 1024 / 1024 ;
let hostName = os.hostname() ;
let platform = os.platform() ;
let windows = os.type(); 

console.log(`Your PC is ${arch} configuration, have ${freeMemory} GB free memory and ${totalMemory} GB total memory.`) ;
console.log(`Your HostName is ${hostName}, and Platform is ${platform}, and you are using ${windows} Operating System.`) ;