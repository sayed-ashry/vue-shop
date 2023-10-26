import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.vue";
import ProductItem from "./components/ProductItem.vue";

const app = createApp(App);
app.component("product-item", ProductItem);
app.mount("#app");
