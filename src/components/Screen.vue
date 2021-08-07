<template>
  <div class="relative w-full h-full">
    <div
      class="absolute flex w-full text-xl border-b-2 border-binance"
      style="top: 0px; padding-right: 2px; padding-left: 2px; padding-top: 2px;"
    >
      <Positions :marquee="true" class="w-1/2 border-r border-binance" />
      <Orders :marquee="true" class="w-1/2" />
    </div>
    <PriceProgressWidget class="absolute" style="bottom: 30px" />
    <div
      class="flex flex-col items-center justify-center w-full h-full text-2xl text-white border-2 border-binance bg-binance-opacity text-black-shadow"
    >
      <div class="text-6xl font-medium text-binance">{{ title }}</div>
      <div class="mt-10 text-3xl">
        {{ message }}
      </div>
      <div class="flex pt-5 mt-10">
        <img
          src="../assets/img/twitter.webp"
          class="mr-4"
          style="height: 32px"
        /><img src="../assets/img/instagram.webp" style="height: 32px" />
      </div>
      <span class="mt-3 text-binance" style="font-size: 1.7rem">
        @{{ social }}</span
      >
    </div>
    <TradingView
      class="absolute h-full"
      style="width: 105%; right: 0; top:0; z-index: -1; padding-bottom: 2px;"
    />
  </div>
</template>

<script>
import PriceProgressWidget from "@/components/PriceProgressWidget.vue";
import Positions from "@/components/Positions/Positions.vue";
import Orders from "@/components/Orders/Orders.vue";
import TradingView from "@/components/TradingView.vue";

export default {
  name: "Screen",
  components: {
    PriceProgressWidget,
    TradingView,
    Positions,
    Orders
  },
  props: {
    title: String,
    message: String,
    social: String
  }
};
</script>
