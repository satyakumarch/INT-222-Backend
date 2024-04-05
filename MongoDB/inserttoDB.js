const {MongoClient}=require('mongodb');
const uri='mongodb://localhost:27017';
const client=new MongoClient(uri);
async function connectToMongoDB(){
    try{
        await client.connect();
        console.log('Connected to mongoDB');
        const db=client.db('satyakumar');
        const collection=db.collection('Student_details');
        await collection.insertOne({name:'satya',age:30});
        console.log('Document inserted successfully');
      

    }catch(error){
        console.error('Error connecting to mongoDB:',error);
    }finally{
        await client.close();
    }
}
connectToMongoDB();