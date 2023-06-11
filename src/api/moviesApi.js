import axios from "axios";
const apiUrl = "https://localhost:44369/api";

export async function downloadMoviesApi() {
  try {
    const response = await axios.get(`${apiUrl}/extMovies`);
    return response.data;
  } catch (error) {
    console.error("Wystąpił błąd podczas pobierania danych:", error);
    throw error;
  }
}

export async function getAllMoviesApi() {
  try {
    const response = await axios.get(`${apiUrl}/movies`);
    return response.data;
  } catch (error) {
    console.error("Wystąpił błąd podczas pobierania danych:", error);
    throw error;
  }
}

export async function addMovieApi(movie) {
  try {
    const response = await axios.post(`${apiUrl}/movies`, movie);
    return response.data;
  } catch (error) {
    console.error("Wystąpił błąd podczas pobierania danych:", error);
    throw error;
  }
}

export async function updateMovieApi(movie) {
  try {
    const response = await axios.put(`${apiUrl}/movies `, movie);
    return response.data;
  } catch (error) {
    console.error("Wystąpił błąd podczas pobierania danych:", error);
    throw error;
  }
}

export async function deleteMovieApi(id) {
  try {
    const response = await axios.delete(`${apiUrl}/movies/${id}`);
    return response.data;
  } catch (error) {
    console.error("Wystąpił błąd podczas pobierania danych:", error);
    throw error;
  }
}
