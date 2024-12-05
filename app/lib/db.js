import { MongoClient } from "mongodb";

let cachedClient = null; // Cache the MongoDB client
let cachedDb = null; // Cache the database instance

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB_URI is not defined in environment variables");
  }

  // Return cached connection if it exists
  if (cachedClient && cachedDb) {
    console.log("Using cached MongoDB connection");
    return { client: cachedClient, db: cachedDb };
  }

  try {
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();
    const db = client.db(); // Get the default database specified in the URI
    console.log("Connected to MongoDB");

    cachedClient = client;
    cachedDb = db;

    return { client, db };
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw new Error("Failed to connect to MongoDB");
  }
};

export default connectDB;
