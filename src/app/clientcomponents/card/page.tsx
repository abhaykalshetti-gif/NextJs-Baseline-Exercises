"use client";

import React from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostCardProps {
  post: Post;
  onSelect: (post: Post) => void;
  isSelected: boolean;
}

export default function PostCard({ post, onSelect, isSelected }: PostCardProps) {
  return (
    <li
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "10px",
        marginBottom: "10px",
        cursor: "pointer",
        background: isSelected ? "#f0f8ff" : "#fff",
      }}
      onClick={() => onSelect(post)}
    >
      <h2 style={{ margin: 0 }}>{post.title}</h2>
    </li>
  );
}
