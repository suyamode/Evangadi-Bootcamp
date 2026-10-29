import React, { useEffect, useState } from "react";
import { Play, Info } from "lucide-react";
import styles from "../styles/banner.module.css";
import { movieInstance } from "../utility/MovieInstance";
import requests from "../utility/requestUrl";

function Banner() {
  const [bannerImage, setBannerImage] = useState({});

  useEffect(() => {
    async function fetchBannerImage() {
      try {
        const request = await movieInstance.get(requests.fetchNetflixOriginals);
        const results = request.data.results;
        setBannerImage(results[Math.floor(Math.random() * results.length)]);
      } catch (error) {
        console.log("Error fetching banner:", error);
      }
    }

    fetchBannerImage();
  }, []);

  const base_url = "https://image.tmdb.org/t/p/original/";

  // Helper function to truncate long text for descriptions
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div
      className={`container-fluid ${styles.banner} text-white`}
      style={{
        backgroundSize: "cover", // Fixed typo here
        backgroundImage: `url("${base_url}${bannerImage?.backdrop_path || ""}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className={styles.content}>
        {/* Title: dynamic from API, falling back to name or original_name */}
        <h1 className={styles.title}>
          {bannerImage?.title ||
            bannerImage?.name ||
            bannerImage?.original_name}
        </h1>

        {/* Description: dynamic from API overview */}
        <h1 className={styles.desc}>{truncate(bannerImage?.overview, 150)}</h1>

        {/* buttons */}
        <div className={styles.btns}>
          <button>
            <Play size={20} />
            Play
          </button>
          <button>
            <Info size={20} />
            My List
          </button>
        </div>

        {/* fading */}
        <div className={styles.fadeBox}></div>
      </div>
    </div>
  );
}

export default Banner;
