import React from "react";
import styles from "../styles/slideshow.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import MovieCard from "./MovieCard";

function SlideShow({ title, movies }) {
  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.Row}>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={10}
          slidesPerView={5}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
        >
          {movies?.map((singleMovie) => (
            <SwiperSlide key={singleMovie.id}>
              <MovieCard movie={singleMovie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SlideShow;
