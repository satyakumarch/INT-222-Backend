const Even = require('events')
var eventEmitter = new Even();  
eventEmitter.on('grade', (err,msg) => { 
console.log(msg); 
});  
eventEmitter.emit('grade',); 
 


// removing events
// const EventEmitter = require('events'); 
// var eventEmitter = new EventEmitter(); 
// var exa1= (msg) => { 
// 	console.log("your message1 " + msg); 
}; 
var exa2 = (msg) => { 
	console.log("your message 2 " + msg); 
}; 
eventEmitter.on('myEvent', exa1); 
eventEmitter.on('myEvent', exa2); 
// eventEmitter.on('myEvent', three); 
 eventEmitter.removeListener('myEvent', exa2);  
eventEmitter.emit('myEvent', "Event occurred"); 
// eventEmitter.removeAllListeners('myEvent');  
// eventEmitter.emit('myEvent', "Event occurred"); 


// Multiple Event Listeners
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('event', () => {
  console.log('Event 1 occurred');
});
eventEmitter.on('event', () => {
  console.log('Event 2 occurred');
});
eventEmitter.emit('event');


// Passing Arguments with Events
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('sum', (a, b) => {
  console.log(`The sum of ${a} and ${b} is ${a + b}`);
});

eventEmitter.emit('sum', 5, 3);
