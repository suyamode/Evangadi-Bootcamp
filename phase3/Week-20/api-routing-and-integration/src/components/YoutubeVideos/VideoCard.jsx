// src/components/VideoCard.jsx
import React from "react";
import styles from "./YouTubeVideos.module.css"; // Note: Make sure your CSS module file name matches!

function VideoCard({ videoId, snippet }) {
  const videoLink = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className={`card h-100 shadow-sm border-0 ${styles.videoCard}`}>
        <a href={videoLink} target="_blank" rel="noopener noreferrer">
          <img
            src={snippet?.thumbnails?.high?.url || null}
            className="card-img-top"
            alt={snippet?.title || "YouTube Video"}
          />
        </a>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title h6 fw-semibold text-dark">
            {snippet?.title || "Loading..."}
          </h5>
          <p className="card-subtitle text-muted small mb-2">
            {snippet?.publishedAt
              ? new Date(snippet.publishedAt).toLocaleDateString()
              : ""}
          </p>
          <p
            className={`card-text text-secondary small flex-grow-1 ${styles.videoDescription}`}
          >
            {snippet?.description || ""}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
