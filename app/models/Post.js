import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  author: { type: String, required: true },
  avatar: { type: String },
  content: { type: String, required: true },
  media: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
