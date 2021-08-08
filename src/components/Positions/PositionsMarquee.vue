<template>
  <div class="flex items-center justify-center text-black-shadow ">
    <div
      class="px-5 py-2 font-medium border-r border-binance text-binance"
      style="flex-grow: 1;flex-shrink: 0;"
    >
      <span id="positions-title" class="animate__animated"
        >Positions ({{ positions.length }})</span
      >
    </div>
    <marquee
      class="p-2 text-white divide-x divide-yellow-400"
      style="flex-shrink: 1;flex-grow: 0;word-spacing: 4px;"
    >
      <span
        class="px-6"
        v-for="position in positions"
        v-bind:key="position.entry"
      >
        {{ position.symbol }}
        <span class="text-binance">{{ position.leverage }}✕</span>
        <span>{{ " " }}</span>
        <span :class="getPositionSideClass(getPositionSideString(position))">{{
          getPositionSideString(position)
        }}</span>
        <span style="word-spacing: normal;">
          {{ position.positionAmt }} @
          {{ isSymbolDollar(position.symbol) ? "$" : "" }}</span
        >{{ formatNumber(position.entryPrice) }}
        -
        <span style="word-spacing: normal;"
          >Liq. @ {{ isSymbolDollar(position.symbol) ? "$" : ""
          }}{{ formatNumber(position.liquidationPrice) }}</span
        >
        - PNL
        <span :class="getPositionPnlClass(position.unRealizedProfit)">
          {{ getPositionPnlString(position) }}
        </span>
      </span>
      <span
        class="italic"
        style="word-spacing: normal;"
        v-if="!positions || positions.length == 0"
        >No position for now.</span
      >
    </marquee>
  </div>
</template>

<script>
import numeral from "numeral";

const animationClass = "animate__flash";

export default {
  name: "PositionsMarquee",
  props: {
    positions: Array
  },
  watch: {
    positions: function(oldVal, newVal) {
      if (oldVal.length !== newVal.length) {
        const el = document.getElementById("positions-title");
        el?.classList.remove(animationClass);
        setTimeout(() => {
          el?.classList.add(animationClass);
        }, 100);
      }
    }
  },
  methods: {
    getPositionSideClass(side) {
      if (side.toLowerCase().includes("long")) return "text-green-400";
      return "text-red-500";
    },
    getPositionSideString(position) {
      if (position.entryPrice > position.liquidationPrice) return "Long ";
      return "Short ";
    },
    getPositionPnlClass(pnl) {
      if (Number(pnl) > 0) return "text-green-500";
      return "text-red-500";
    },
    getPositionPnlString(position) {
      let str = "";
      if (this.isSymbolDollar(position.symbol)) {
        str = "$" + str;
      }
      if (Number(position.unRealizedProfit) < 0) {
        str = "-" + str;
      } else {
        str = "+" + str;
      }
      str =
        str +
        numeral(Math.abs(Number(position.unRealizedProfit))).format("0,0.00");
      return str;
    },
    isSymbolDollar(symbol) {
      if (symbol.slice(-4) === "USDT") {
        return true;
      }
      return false;
    },
    formatNumber(n) {
      if (Number(n) < 1000) return numeral(n).format("0,0.00");
      return numeral(n).format("0,0");
    }
  }
};
</script>
