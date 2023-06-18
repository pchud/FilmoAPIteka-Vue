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
  }
}

export async function getMovieApi(movieId) {
  try {
    const response = await axios.get(`${apiUrl}/movies/${movieId}`);
    return response.data;
  } catch (error) {
    throw new Error(
      `Wystąpił błąd podczas pobierania filmu o ${movieId} z bazy.`
    );
  }
}

export async function addMovieApi(movie) {
  try {
    const response = await axios.post(`${apiUrl}/movies`, movie);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(`Wystąpił błąd podczas dodawania filmu do bazy.`);
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
  }
}

export async function deleteMovieApi(id) {
  try {
    const response = await axios.delete(`${apiUrl}/movies/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Wystąpił błąd podczas usuwania filmu.`);
  }
}
