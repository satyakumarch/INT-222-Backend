const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017';

// Create a new MongoClient
const client = new MongoClient(uri);

async function connectToMongoDB() {
    try {
        // Connect to the MongoDB server
        await client.connect();
        console.log('Connected to MongoDB');

        // Access a specific database
        const db = client.db('mamtadb');

        // Access a specific collection and insert a document
        const collection = db.collection('your_collection_name');
        await collection.insertOne({ name: 'John', age: 30 });
        console.log('Document inserted successfully.');

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    } finally {
        // Close the connection
        await client.close();
    }
}

// Call the function to connect
connectToMongoDB();
