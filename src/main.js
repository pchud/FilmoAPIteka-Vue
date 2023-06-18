import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";

// Navigation
import NavHeader from "./components/Navigation/NavHeader.vue";
// Table
import MovieTable from "./components/Table/MovieTable.vue";
import MovieRecord from "./components/Table/MovieRecord.vue";
// Popups
import AddMoviePopup from "./components/Messages/AddMoviePopup.vue";
import DeleteMoviePopup from "./components/Messages/DeleteMoviePopup.vue";
import ErrorsMessagePopup from "./components/Messages/ErrorsMessagePopup.vue";

const app = createApp(App);

// Navigation - Components
app.component("nav-header", NavHeader);

// Table - Components
app.component("movie-table", MovieTable);
app.component("movie-record", MovieRecord);

// Modal Window - Component
app.component("add-movie-popup", AddMoviePopup);
app.component("delete-movie-popup", DeleteMoviePopup);
app.component("errors-message-popup", ErrorsMessagePopup);

app.mount("#app");
