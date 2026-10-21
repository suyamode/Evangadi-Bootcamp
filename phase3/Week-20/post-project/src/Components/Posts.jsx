import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./Auth";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { username } = useAuth();

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading) return <div>Loading posts...</div>;

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
      <div
        style={{
          border: "2px solid #333",
          padding: "15px",
          borderRadius: "8px",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        <h2>All Posts</h2>
        {username && (
          <p style={{ margin: 0, color: "gray" }}>
            Logged in as: <strong>{username}</strong>
          </p>
        )}
      </div>

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
      >
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "2px solid #333",
              borderRadius: "8px",
              padding: "15px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h3>{post.title}</h3>
              <p>{post.body.substring(0, 100)}...</p>
            </div>
            <div style={{ marginTop: "15px" }}>
              <div
                style={{
                  fontSize: "0.85em",
                  color: "#666",
                  marginBottom: "10px",
                }}
              >
                Likes: 👍 {post.reactions?.likes || 0} | Views: 👁️ {post.views}
              </div>
              <Link
                to={`/posts/${post.id}`}
                style={{
                  display: "inline-block",
                  padding: "6px 12px",
                  backgroundColor: "#007bff",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "4px",
                }}
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
