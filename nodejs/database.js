const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017';

// Database Name
const dbName = 'your_database_name';

// Create a new MongoClient
const client = new MongoClient(uri);

async function main() {
    try {
        // Connect the client to the server
        await client.connect();
        console.log('Connected to MongoDB server');

        // Connect to the specific database
        const db = client.db(dbName);

        // Perform operations within the database context
        // For example, you can create a collection:
        await db.createCollection('your_collection_name');
        console.log('Collection created successfully.');

    } finally {
        // Close the connection when done
        await client.close();
    }
}

main().catch(console.error);
