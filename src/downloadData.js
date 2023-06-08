import axios from "axios";
import cors from "cors";
const apiUrl = "https://filmy.programdemo.pl/MyMovies";

export async function fetchDataFromAPI() {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error("Wystąpił błąd podczas pobierania danych:", error);
    throw error;
  }
}
