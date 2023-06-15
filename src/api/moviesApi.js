import axios from "axios";
// const apiUrl = "https://localhost:44369/api";
const apiUrl = "https://filomoapiteka.azurewebsites.net/api";

export async function downloadMoviesApi() {
  try {
    const response = await axios.get(`${apiUrl}/extMovies`);
    return response.data;
  } catch (error) {
    throw new Error(
      "Wystąpił błąd podczas pobierania filmów. (zewnętrzna baza)"
    );
    console.log(error.response);
    console.error("Wystąpił błąd podczas pobierania danych:", error);
    // throw error;
  }
}

export async function getAllMoviesApi() {
  try {
    const response = await axios.get(`${apiUrl}/movies`);
    return response.data;
  } catch (error) {
    throw new Error(
      "Wystąpił błąd podczas pobierania wszystkich filmów z bazy."
    );
    // console.error("Wystąpił błąd podczas pobierania danych:", error);
    console.log(error.response);
    // throw `Błąd z pobranie danych z serwera API. (${error.message})`;
    console.log("TEST:", error);
  }
}

export async function addMovieApi(movie) {
  try {
    const response = await axios.post(`${apiUrl}/movies`, movie);
    return response.data;
  } catch (error) {
    throw new Error(`Wystąpił błąd podczas dodawania filmów do bazy.`);
    console.error("Wystąpił błąd podczas pobierania danych:", error);
    throw error;
  }
}

export async function updateMovieApi(movie) {
  try {
    const response = await axios.put(`${apiUrl}/movies `, movie);
    return response.data;
  } catch (error) {
    throw new Error(
      `Wystąpił błąd podczas aktualizowania filmu w bazie danych.)`
    );
    // console.error("Wystąpił błąd podczas pobierania danych:", error);
    // throw error;
    console.log("TEST:", error);
  }
}

export async function deleteMovieApi(id) {
  try {
    const response = await axios.delete(`${apiUrl}/movies/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Wystąpił błąd podczas usuwania filmu.`);
    console.error("Wystąpił błąd podczas pobierania danych:", error);
    throw error;
  }
}
