// eslint-disable-next-line
import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import App from "./App.vue";
import Header from "./components/navButtons.vue";

createApp(Header).mount("#header");
createApp(App).mount("#app");

import "bootstrap/dist/js/bootstrap.js";
