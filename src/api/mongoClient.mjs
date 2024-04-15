import dotenv from 'dotenv';
import { MongoClient } from "mongodb";
import { cache } from 'react'

dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;
const client = new MongoClient(MONGODB_URI);

export const run = cache(async () => {

  try {
    await client.connect();
    const database = client.db("portfolio");
    const collection = database.collection("mydata");
    return await collection.find({}).toArray();
  } 
  catch (e) {
    console.error(e);
  }
}); 
