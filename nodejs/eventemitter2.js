const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('grade', (err, msg) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('Message:', msg);
  }
});
eventEmitter.emit('grade', new Error('Sample error'));