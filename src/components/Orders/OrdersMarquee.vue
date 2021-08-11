<template>
  <div class="flex items-center justify-center text-black-shadow">
    <div
      class="px-5 py-2 font-medium border-r border-binance text-binance"
      style="flex-grow: 1;flex-shrink: 0;"
    >
      <span id="orders-title" class="animate__animated"
        >{{ $t("open_orders") }} ({{ orders.length }})</span
      >
    </div>
    <marquee
      class="p-2 text-white divide-x divide-yellow-400"
      style="flex-shrink: 1;flex-grow: 0;word-spacing: 4px;"
    >
      <span class="px-6" v-for="order in orders" v-bind:key="order.id">
        {{ formatSymbolPair(order.symbol) }}
        <span
          :class="getOrderSideClass(order.side)"
          style="word-spacing: normal"
        >
          {{ getOrderSideString(order) }}
        </span>
        <span>{{ " " }}</span>
        <span style="word-spacing: normal">
          {{ getOrderTypeString(order.type) }}
        </span>
        <span>{{ " " }}</span>
        <span style="word-spacing: normal;"
          >{{ order.origQty }} @ {{ isSymbolDollar(order.symbol) ? "$" : ""
          }}{{ formatNumber(order.price) }}</span
        >
      </span>
      <span
        class="italic"
        style="word-spacing: normal;"
        v-if="!orders || orders.length == 0"
        >No order for now.</span
      >
    </marquee>
  </div>
</template>

<script>
import {
  isSymbolDollar,
  formatNumber,
  formatEnum,
  formatSymbolPair
} from "@/utils.js";

const animationClass = "animate__flash";

export default {
  name: "OrdersMarquee",
  props: {
    orders: Array
  },
  watch: {
    orders: function() {
      const el = document.getElementById("orders-title");
      el?.classList.remove(animationClass);
      setTimeout(() => {
        el?.classList.add(animationClass);
      }, 150);
    }
  },
  methods: {
    getOrderSideClass(side) {
      if (side.toLowerCase().includes("buy")) return "text-green-400";
      return "text-red-500";
    },
    getOrderSideString(order) {
      if (order.side.toLowerCase() === "buy") return this.$t("buy") + " / Long";
      else if (order.side.toLowerCase() === "sell")
        return this.$t("sell") + " / Short";
      return "-";
    },
    getOrderTypeString(type) {
      return formatEnum(type, false);
    },
    isSymbolDollar,
    formatNumber,
    formatSymbolPair
  }
};
</script>
