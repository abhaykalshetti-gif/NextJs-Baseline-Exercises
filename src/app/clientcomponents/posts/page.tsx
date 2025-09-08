"use client";

import { useEffect, useState } from "react";
import PostCard from "../card/page";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostsListProps {
  onSelect: (post: Post) => void;
  selectedPost: Post | null;
}

export default function PostsList({ onSelect, selectedPost }: PostsListProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data: Post[] = await res.json();
        setPosts(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>⏳ Loading posts...</p>;
  if (error) return <p style={{ color: "red" }}>❌ {error}</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onSelect={onSelect}
          isSelected={selectedPost?.id === post.id}
        />
      ))}
    </ul>
  );
}
