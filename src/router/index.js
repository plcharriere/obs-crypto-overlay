import { createRouter, createWebHistory } from "vue-router";
import ProgressView from "../views/ProgressView.vue";
import OrdersView from "../views/OrdersView.vue";
import PositionsView from "../views/PositionsView.vue";
import FooterView from "../views/FooterView.vue";
import BackgroundView from "../views/BackgroundView.vue";
import BTCPriceView from "../views/BTCPriceView.vue";
import HeaderView from "../views/HeaderView.vue";
import ScreenView from "../views/ScreenView.vue";

const routes = [
  {
    path: "/progress",
    name: "Progress",
    component: ProgressView
  },
  {
    path: "/orders",
    name: "Orders",
    component: OrdersView
  },
  {
    path: "/positions",
    name: "Positions",
    component: PositionsView
  },
  {
    path: "/footer",
    name: "Footer",
    component: FooterView
  },
  {
    path: "/background",
    name: "Background",
    component: BackgroundView
  },
  {
    path: "/btcprice",
    name: "BTCPrice",
    component: BTCPriceView
  },
  {
    path: "/header",
    name: "Header",
    component: HeaderView
  },
  {
    path: "/screen",
    name: "Screen",
    component: ScreenView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
