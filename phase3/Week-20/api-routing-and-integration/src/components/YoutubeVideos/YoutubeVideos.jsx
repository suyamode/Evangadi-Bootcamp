// src/components/YoutubeVideos.jsx
import React, { useState, useEffect } from "react";
import { fetchYouTubeVideos } from "../../api/YouTubeApi";
import VideoCard from "./VideoCard";
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
              <VideoCard
                key={videoId}
                snippet={snippet}
                videoLink={videoLink}
                videoId={videoId}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default YoutubeVideos;
