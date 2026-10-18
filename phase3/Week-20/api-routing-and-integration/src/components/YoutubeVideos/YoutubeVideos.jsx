// src/components/YoutubeVideos.jsx
import React, { useState, useEffect } from "react";
import { fetchYouTubeVideos } from "../../api/YouTubeApi";
import styles from "./YoutubeVideos.module.css";

function YoutubeVideos() {
  const API_KEY = import.meta.env.VITE_YOUTUBE_KEY;
  const CHANNEL_ID = "UCE_M8A5yxnLfW0KghEeajjw";
  const [youtubeVids, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const items = await fetchYouTubeVideos(API_KEY, CHANNEL_ID);
      console.log(items);
      setVideos(items);
    };

    getVideos();
  }, [API_KEY, CHANNEL_ID]);

  return (
    <div className={styles.youtubeContainer}>
      <div className="container">
        <h2 className="text-center p-4 fw-bold">Latest Apple Videos</h2>
        <div className="row g-4">
          {youtubeVids.map((video) => {
            const { id, snippet } = video;
            const videoId = id.videoId || id.channelId;
            const videoLink = `https://www.youtube.com/watch?v=${videoId}`;

            return (
              <div key={videoId} className="col-12 col-md-6 col-lg-4">
                <div
                  className={`card h-100 shadow-sm border-0 ${styles.videoCard}`}
                >
                  <a href={videoLink} target="_blank">
                    <img
                      src={snippet.thumbnails.high.url}
                      className="card-img-top"
                      alt={snippet.title}
                    />
                  </a>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title h6 fw-semibold text-dark">
                      {snippet.title}
                    </h5>
                    <p className="card-subtitle text-muted small mb-2">
                      {new Date(snippet.publishedAt).toLocaleDateString()}
                    </p>
                    <p
                      className={`card-text text-secondary small flex-grow-1 ${styles.videoDescription}`}
                    >
                      {snippet.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default YoutubeVideos;
