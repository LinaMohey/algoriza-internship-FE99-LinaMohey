import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

import Navbar from "@/components/shared/navbar.vue";
import Logo from "@/components/shared/logo.vue";
import warningSection from "@/components/shared/warning/warning-section.vue";
import mainLayout from "./layouts/main-layout.vue";
import loadingSpinner from "@/components/shared/loading-spinner/loading-spinner.vue";

const app = createApp(App);
const pinia = createPinia();

// Register global components

app.component("logo", Logo);
app.component("navbar", Navbar);
app.component("warning-section", warningSection);
app.component("main-layout", mainLayout);
app.component("loadingSpinner", loadingSpinner);

app.use(router);
app.use(pinia);

app.mount("#app");
