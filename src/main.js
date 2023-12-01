import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

import Navbar from "@/components/UI/navbar.vue";
import Logo from "@/components/UI/logo.vue";
import WarningSection from "@/components/sections/warning/warning-section.vue";
import mainLayout from "./layouts/main-layout.vue";
// import Footer from "@/components/UI/Footer.vue";

const app = createApp(App);
const pinia = createPinia();

// Register global components

app.component("logo", Logo);
app.component("navbar", Navbar);
app.component("warning-section", WarningSection);
app.component("main-layout", mainLayout);
// app.component("footer", Footer);

app.use(router);
app.use(pinia);

app.mount("#app");
