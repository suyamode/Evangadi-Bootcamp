import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import styles from "../styles/movieCard.module.css";

// TMDB base URL for images
const base_url = "https://image.tmdb.org/t/p/original/";

function MovieCard({ movie }) {
  let genres = ["Adventrue", "Thriller", "Action"];

  return (
    <div className={styles.cardWrapper}>
      {/* Poster image with the base_url prepended */}
      <img
        className={styles.poster}
        src={`${base_url}${movie.poster_path}`}
        alt={movie.title || movie.name || "poster image"}
      />
      {/* hover card */}
      <div className={styles.hoverCard}>
        {/* hover image */}
        <img
          src={`${base_url}${movie.poster_path}`}
          alt={movie.title || movie.name || "hover image"}
          className={styles.hoverImage}
        />
        {/* badge */}
        <div className={styles.badge}>Recently added</div>
        {/* buttons */}
        <div className={styles.buttonRow}>
          <FaCirclePlay
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <BsPlusCircle
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <GoCheckCircleFill
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <IoIosArrowDropdownCircle
            className={styles.circleButton}
            color="white"
            size={40}
          />
        </div>

        {/* meta data */}
        <div className="metaRow">
          <span className={styles.tag}>U/A 16+</span>
          <span className={styles.tag}>Movie</span>
          <span className={styles.tag}>HD</span>
        </div>
        {/* genre */}
        <div>
          {genres.map((genre, index) => {
            return (
              <span key={index} className={styles.genre}>
                {genre}

                {index < genres.length - 1 && (
                  <span className={styles.dot}>.</span>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
