"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Post {
  _id: string;
  author: string;
  avatar: string;
  content: string;
  createdAt: string;
}

const Feed = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts");
        if (!response.ok) throw new Error("Failed to fetch posts");
        const fetchedPosts = await response.json();
        if (Array.isArray(fetchedPosts)) {
          setPosts(fetchedPosts);
        } else {
          setError("Unexpected response format. Please try again.");
        }
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Failed to load posts. Please refresh the page.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handlePost = async () => {
    if (newPost.trim() === "") {
      setError("Post content cannot be empty.");
      return;
    }

    const newPostObject: Partial<Post> = {
      author: "Anonymous",
      avatar: "/default-avatar.png",
      content: newPost,
      createdAt: new Date().toISOString(),
    };

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPostObject),
      });

      if (!response.ok) {
        throw new Error("Failed to create post.");
      }

      setPosts([newPostObject as Post, ...posts]);
      setNewPost("");
      setError("");
    } catch (err) {
      console.error("Error creating post:", err);
      setError("Failed to create post. Please try again.");
    }
  };

  return (
    <div
      className="ml-72 mt-16 p-4 bg-gray-900 min-h-[calc(100vh-4rem)] text-gray-300 overflow-y-auto"
      aria-live="polite"
    >
      <div className="bg-gray-800 p-4 rounded-md shadow-md mb-4">
        {error && (
          <p className="text-red-500 mb-2" role="alert">
            {error}
          </p>
        )}
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full bg-gray-700 text-gray-300 p-3 rounded-md resize-none"
          rows={3}
          aria-label="Post content"
        />
        <button
          onClick={handlePost}
          className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          aria-label="Submit your post"
        >
          Post
        </button>
      </div>

      {loading && (
        <p className="text-gray-400" role="status">
          Loading posts...
        </p>
      )}

      {!loading && posts.length > 0 && (
        <div>
          {posts.map((post) => (
            <div
              key={post._id || `${post.author}-${post.createdAt}`} // Unique key
              className="bg-gray-800 text-gray-300 p-4 rounded-md shadow-md mb-4"
            >
              <div className="flex items-center mb-2">
                <div className="flex items-center">
                  <Image
                    src={post.avatar || "/default-avatar.png"}
                    alt={`${post.author}'s avatar`}
                    className="w-10 h-10 rounded-full mr-3"
                    width={40}
                    height={40}
                  />
                  <div>
                    <h3 className="font-bold text-white">{post.author}</h3>
                    <p className="text-gray-400 text-sm">
                      {new Date(post.createdAt).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-200">{post.content}</p>
            </div>
          ))}
        </div>
      )}

      {!loading && posts.length === 0 && (
        <p className="text-gray-400" role="status">
          No posts available. Be the first to post!
        </p>
      )}
    </div>
  );
};

export default Feed;
