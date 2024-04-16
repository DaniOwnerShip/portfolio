import dotenv from 'dotenv';
import { MongoClient } from "mongodb";

dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;
const client = new MongoClient(MONGODB_URI);

export const getdbdata = async () => {

  try {
     
    await client.connect();
    const database = client.db("portfolio");
    const collection = database.collection("mydata"); 
    
    const result = await collection.find({}).toArray(); 
    
    // await client.close();

    return result;
  } 
  catch (e) { 
    throw e;  
  }
};
