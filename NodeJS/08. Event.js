const EventEmitter = require('events') ;

const event = new EventEmitter();

//  Defining the personal Event.
event.on('myPersonalEvent', ()=>{
    console.log("This is my Personal Event.") ;
}) ;

//  Calling the event. chrome://net-internals/#dns
event.emit('myPersonalEvent') ;