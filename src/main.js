import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/index.css";

createApp(App)
  .use(router)
  .mount("#app");

export function formatEnum(str, capitalize = true) {
  while (str.includes("_")) str = str.replace("_", " ");
  while (str.includes("market")) str = str.replace("market", " ");
  if (capitalize) {
    let cleanStr = str.toLowerCase();
    const splitStr = cleanStr.split(" ");
    for (let i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(" ");
  }
  return str;
}
