"use client";

import { useState } from "react";
import PostsList from "./posts/page";

interface Post {
  id: number;
  title: string;
  body: string;
}
export default function PostsPage() {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  return (
    <div style={{ padding: "20px" }}>
      <h1>📰 Posts (Client Components)</h1>

      <PostsList onSelect={setSelectedPost} selectedPost={selectedPost} />

      {selectedPost && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            border: "1px solid #333",
            borderRadius: "8px",
            background: "#fafafa",
          }}
        >
          <h2>📌 Selected Post</h2>
          <h3>{selectedPost.title}</h3>
          <p>{selectedPost.body}</p>
          <button onClick={() => setSelectedPost(null)}>❎ Close</button>
        </div>
      )}
    </div>
  );
}
