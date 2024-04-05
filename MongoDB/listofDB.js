const {MongoClient}=require('mongodb');
const uri='mongodb://localhost:27017';
const client=new MongoClient(uri);
async function listDatadases(){
    try{
        await client.connect();
        console.log('Connected to mongoDB');
        const adminDb=client.db().admin();
        const databases=await adminDb.listDatabases();
        console.log('list of databases:',databases.databases);

    }catch(error){
        console.error('Error connecting to mongoDB:',error);
    }finally{
        await client.close();
    }
}
listDatadases();