import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
// import Card from "@/components/base/Card.vue";
// import BaseButton from "@/components/base/BaseButton.vue";
// import InputField from "@/components/base/InputField.vue";
import Navbar from "@/components/UI/navbar.vue";
import Logo from "@/components/UI/logo.vue";
import WarningSection from "@/components/sections/warning-section.vue";
// import Footer from "@/components/UI/Footer.vue";

const app = createApp(App);
const pinia = createPinia();

// Register global components

// app.component("base-button", BaseButton);
// app.component("input-field", InputField);
// app.component("card", Card);
app.component("logo", Logo);
app.component("navbar", Navbar);
app.component("warning-section", WarningSection);
// app.component("footer", Footer);

app.use(router);
app.use(pinia);

app.mount("#app");
