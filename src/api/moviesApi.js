import axios from "axios";
const apiUrl = "https://localhost:44369/api";
// const extApiUrl = "https://filmy.programdemo.pl/MyMovies";

// export async function fetchDataFromAPI() {
//   try {
//     const response = await axios.get(apiUrl);
//     return response.data;
//   } catch (error) {
//     console.error("Wystąpił błąd podczas pobierania danych:", error);
//     throw error;
//   }
// }

export async function downloadMovies() {
  try {
    const response = await axios.get(`${apiUrl}/extMovies`);
    return response.data;
  } catch (error) {
    console.error("Wystąpił błąd podczas pobierania danych:", error);
    throw error;
  }
}

export async function getAllMovies() {
  try {
    const response = await axios.get(`${apiUrl}/movies`);
    return response.data;
  } catch (error) {
    console.error("Wystąpił błąd podczas pobierania danych:", error);
    throw error;
  }
}

export async function addMovie(movie) {
  try {
    const response = await axios.post(`${apiUrl}/movies`, movie);
    return response.data;
  } catch (error) {
    console.error("Wystąpił błąd podczas pobierania danych:", error);
    throw error;
  }
}

export async function updateMovie(movie) {
  try {
    const response = await axios.put(`${apiUrl}/movie`, movie);
    return response.data;
  } catch (error) {
    console.error("Wystąpił błąd podczas pobierania danych:", error);
    throw error;
  }
}

export async function deleteMovie(id) {
  try {
    const response = await axios.delete(`${apiUrl}/movies/${id}`);
    return response.data;
  } catch (error) {
    console.error("Wystąpił błąd podczas pobierania danych:", error);
    throw error;
  }
}
