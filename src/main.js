import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createI18n } from "vue-i18n";
import { messages } from "@/locales.js";
import "./assets/css/index.css";

createApp(App)
  .use(router)
  .use(
    createI18n({
      locale: process.env.VUE_APP_LANGUAGE,
      fallbackLocale: "en",
      messages
    })
  )
  .mount("#app");
