import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (loading) return <div>Loading post details...</div>;
  if (!post) return <div>Post not found!</div>;

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      {/* Top Header */}
      <div
        style={{
          border: "2px solid #333",
          padding: "15px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <Link to="/posts">← Back to Posts</Link>
        <h2 style={{ marginTop: "10px" }}>Post Details (ID: {post.id})</h2>
      </div>

      {/* Main Content Box */}
      <div
        style={{
          border: "2px solid #333",
          padding: "25px",
          borderRadius: "8px",
          minHeight: "300px",
        }}
      >
        <h1>{post.title}</h1>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>{post.body}</p>

        <div
          style={{
            marginTop: "30px",
            paddingTop: "15px",
            borderTop: "1px solid #ccc",
          }}
        >
          <p>
            <strong>Tags:</strong> {post.tags?.join(", ")}
          </p>
          <p>
            <strong>Views:</strong> {post.views}
          </p>
          <p>
            <strong>Reactions:</strong> Likes: {post.reactions?.likes} /
            Dislikes: {post.reactions?.dislikes}
          </p>
        </div>
      </div>
    </div>
  );
}
