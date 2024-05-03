const { Duplex } = require('stream');

// Create a Duplex stream
const myDuplexStream = new Duplex({
  write(chunk, encoding, callback) {
    // Log the data received from the writable side of the stream
    console.log(`Received data from writable side: ${chunk.toString()}`);
    callback();
  },

  read(size) {
    // Read data from the dataToSend array and push it into the stream
    const dataToSend = ['Message 1', 'Message 2', 'Message 3'];
    const data = dataToSend.shift();
    if (data) {
      this.push(data);
    } else {
      // When there's no more data to send, push null to signal the end of the stream
      this.push(null);
    }
  }
});

// Pipe the Duplex stream to process.stdout (the console)
myDuplexStream.pipe(process.stdout);

// Write data to the writable side of the stream
myDuplexStream.write('Data written to the duplex stream.');

// End the writable side of the stream
myDuplexStream.end();
