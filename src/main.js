import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";

import NavHeader from "./components/Navigation/NavHeader.vue";
import ModalPopupTest from "./components/Popups/ModalPopupTest.vue";
import ModalWindow from "./components/Popups/ModalWindow.vue";
import MovieRecord from "./components/Table/MovieRecord.vue";
import MovieTable from "./components/Table/MovieTable.vue";
import BaseDialog from "./components/UI/BaseDialog.vue";

import ModalWindowTest from "./components/Popups/ModalWindowTest.vue";
import MessagePopup from "./components/Messages/MessagePopup.vue";
const app = createApp(App);

// Navigation - Components
app.component("nav-header", NavHeader);

// Table - Components
app.component("movie-table", MovieTable);
app.component("movie-record", MovieRecord);

// UI - Components (i.e. buttons)
app.component("modal-popup-test", ModalPopupTest);

// Modal Window - Component
app.component("modal-window", ModalWindow);

// Tests - Components
app.component("modal-window-test", ModalWindowTest);
app.component("base-dialog", BaseDialog);
app.component("message-popup", MessagePopup);

app.mount("#app");
