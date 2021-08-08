import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import ProgressView from "../views/ProgressView.vue";
import OrdersView from "../views/OrdersView.vue";
import PositionsView from "../views/PositionsView.vue";
import FooterView from "../views/FooterView.vue";
import BackgroundView from "../views/BackgroundView.vue";
import BTCPriceView from "../views/BTCPriceView.vue";
import HeaderView from "../views/HeaderView.vue";
import IdleView from "../views/IdleView.vue";

const routes = [
  {
    path: "/main",
    name: "Main",
    component: MainView
  },
  {
    path: "/idle",
    name: "Idle",
    component: IdleView
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
    path: "/header",
    name: "Header",
    component: HeaderView
  },
  {
    path: "/footer",
    name: "Footer",
    component: FooterView
  },
  {
    path: "/btcprice",
    name: "BTCPrice",
    component: BTCPriceView
  },
  {
    path: "/progress",
    name: "Progress",
    component: ProgressView
  },
  {
    path: "/background",
    name: "Background",
    component: BackgroundView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
