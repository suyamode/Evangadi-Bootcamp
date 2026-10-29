import React, { useState, useEffect } from "react";
import SlideShow from "./SlideShow";
import styles from "../styles/displayRow.module.css";
import { movieInstance } from "../utility/MovieInstance";
import requests from "../utility/requestUrl";

function DisplayRow() {
  const [movies, setMovies] = useState({
    trending: [],
    netflixOriginals: [],
    topRated: [],
    action: [],
    comedy: [],
    horror: [],
    romance: [],
    documentaries: [],
  });

  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    try {
      const [
        trendingRes,
        netflixRes,
        topRatedRes,
        actionRes,
        comedyRes,
        horrorRes,
        romanceRes,
        documentariesRes,
      ] = await Promise.all([
        movieInstance.get(requests.fetchTrending),
        movieInstance.get(requests.fetchNetflixOriginals),
        movieInstance.get(requests.fetchTopRatedMovies),
        movieInstance.get(requests.fetchActionMovies),
        movieInstance.get(requests.fetchComedyMovies),
        movieInstance.get(requests.fetchHorrorMovies),
        movieInstance.get(requests.fetchRomanceMovies),
        movieInstance.get(requests.fetchDocumentaries),
      ]);

      setMovies({
        trending: trendingRes.data.results,
        netflixOriginals: netflixRes.data.results,
        topRated: topRatedRes.data.results,
        action: actionRes.data.results,
        comedy: comedyRes.data.results,
        horror: horrorRes.data.results,
        romance: romanceRes.data.results,
        documentaries: documentariesRes.data.results,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading movies...</div>;
  }

  return (
    <div className={styles.mainWrapper}>
      <SlideShow title="Netflix Trending" movies={movies.trending} />
      <SlideShow title="Popular on Netflix" movies={movies.netflixOriginals} />
      <SlideShow title="Action" movies={movies.action} />
      <SlideShow title="Top Rated" movies={movies.topRated} />
    </div>
  );
}

export default DisplayRow;
