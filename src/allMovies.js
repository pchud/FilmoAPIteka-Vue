import { reactive } from "vue";
import moviesData from "./data/moviesData.json";

export const allMovies = reactive({
  ...moviesData,
});
