import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

let isConnected = false;

async function connectDB() {
  if (!isConnected) {
    await client.connect();
    isConnected = true;
    console.log("Connected to MongoDB");
  }
  return client.db("FacebookClone");
}

// GET request to fetch all posts
export async function GET() {
  try {
    const db = await connectDB();
    const posts = await db
      .collection("posts")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return new Response(JSON.stringify({ message: "Error fetching posts" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// POST request to create a new post
export async function POST(req) {
  try {
    const { author, avatar, content } = await req.json();

    if (!author || !content) {
      return new Response(
        JSON.stringify({ message: "Author and content are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const db = await connectDB();
    const newPost = {
      author,
      avatar: avatar || "/default-avatar.png", // Default avatar if not provided
      content,
      createdAt: new Date().toISOString(),
    };

    await db.collection("posts").insertOne(newPost);

    return new Response(JSON.stringify({ message: "Post created" }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating post:", error);
    return new Response(JSON.stringify({ message: "Error creating post" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
