import axios from "axios";
const movieInstance = axios.create({
  baseUrl: "https://api.themoviedb.org/3",
});
export { movieInstance };
