// eslint-disable-next-line

import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
// import Header from "./components/Navigation/navButtons.vue";
// import { getDataFromSQL } from "./updateData.js";

import NavButtons from "./components/Navigation/NavButtons.vue";
import ModalPopupTest from "./components/Popups/ModalPopupTest.vue";
import ModalWindow from "./components/Popups/ModalWindow.vue";
import MovieRecord from "./components/Table/MovieRecord.vue";
import PageTable from "./components/Table/PageTable.vue";

const app = createApp(App);

// Components
app.component("nav-buttons", NavButtons);
app.component("modal-popup-test", ModalPopupTest);
app.component("modal-window", ModalWindow);
app.component("movie-record", MovieRecord);
app.component("page-table", PageTable);

app.mount("#app");
