<template>
  <div class="flex flex-col items-center justify-center text-black-shadow">
    <div class="text-xl font-medium text-binance">
      Latest <span style="font-size:1.35rem">₿</span>itcoin Price
    </div>
    <div class="flex items-center justify-center">
      <div
        class="mr-2"
        :class="{ 'arrow-up': direction, 'arrow-down': !direction }"
      ></div>
      <div
        class="mt-1 text-2xl font-medium"
        :class="{ 'text-green-400': direction, 'text-red-600': !direction }"
      >
        $<span id="price"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { CountUp } from "countup.js";
import { getFuturesMarkPrice } from "@/binance";

export default {
  name: "BTCPrice",
  data() {
    return {
      btcPrice: undefined,
      direction: Boolean,
      client: undefined
    };
  },
  created() {
    this.direction = true;
  },
  async mounted() {
    this.btcPrice = new CountUp("price", 0, {
      useEasing: false,
      decimalPlaces: 2,
      duration: 0.4
    });

    await this.refresh();
    setInterval(this.refresh, 4000);
  },
  methods: {
    async refresh() {
      const price = await getFuturesMarkPrice("BTCUSDT");
      if (price) {
        this.direction = price >= this.btcPrice.endVal;
        this.btcPrice.update(price);
      }
    }
  }
};
</script>

<style>
.arrow-up {
  width: 0;
  height: 0;
  margin-top: 6px;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;

  border-bottom: 8px solid rgb(16, 185, 129);
}

.arrow-down {
  width: 0;
  height: 0;
  margin-top: 8px;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;

  border-top: 8px solid rgb(220, 38, 38);
}
</style>
