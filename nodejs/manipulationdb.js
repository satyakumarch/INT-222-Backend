const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

async function main() {
  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    console.log('Connected to the database');

    // Select the database
    const db = client.db(dbName);

    // Insert documents
    const collection = db.collection('documents');
    const result = await collection.insertMany([
      { name: 'John', age: 30 },
      { name: 'Jane', age: 25 }
    ]);
    console.log(`${result.insertedCount} documents inserted`);

    // Find documents
    const documents = await collection.find({}).toArray();
    console.log('Found the following documents:');
    console.dir(documents);

    // Update documents
    const updateResult = await collection.updateOne({ name: 'John' }, { $set: { age: 31 } });
    console.log(`${updateResult.modifiedCount} documents updated`);

    // Find updated document
    const updatedDocument = await collection.findOne({ name: 'John' });
    console.log('Updated document:');
    console.dir(updatedDocument);

    // Delete documents
    const deleteResult = await collection.deleteOne({ name: 'Jane' });
    console.log(`${deleteResult.deletedCount} documents deleted`);

  } catch (err) {
    console.log(err.stack);
  } finally {
    // Close the connection
    await client.close();
  }
}

main().catch(console.error);
