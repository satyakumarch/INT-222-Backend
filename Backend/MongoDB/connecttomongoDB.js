const {mongoClient, MongoClient}=require('mongodb');
const uri='mongodb://localhost:27017';
const client=new MongoClient(uri);
async function connectToMongoDB(){
    try{
        await client.connect();
        console.log('Connected to  mongoDB');

    }catch(error){
        console.error('Error connecting to mongoDB:',error);
    }
}
connectToMongoDB();