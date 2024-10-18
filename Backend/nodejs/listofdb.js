const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017';

// Create a new MongoClient
const client = new MongoClient(uri);

async function listDatabases() {
    try {
        // Connect to the MongoDB server
        await client.connect();
        console.log('Connected to MongoDB');

        // List all databases
        const adminDb = client.db().admin();
        const databases = await adminDb.listDatabases();
        console.log('List of databases:', databases.databases);

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    } finally {
        // Close the connection
        await client.close();
    }
}

// Call the function to list databases
listDatabases();
