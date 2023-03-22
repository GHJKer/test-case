import { createApp } from "vue";
import "./assets/styles/typography.css";
import "./assets/styles/variables.css";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";

createApp(App).use(router).mount("#app");
