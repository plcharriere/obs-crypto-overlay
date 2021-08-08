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
        @{{ getSocial() }}</span
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
  components: {
    PriceProgressWidget,
    TradingView,
    Positions,
    Orders
  },
  data() {
    return {
      title: "",
      message: "",
      screens: {
        start: {
          title: "Début du live !",
          message: "Le live va bientôt commencer, j'arrive les kheys !"
        },
        end: {
          title: "Fin du live !",
          message:
            "Le live est maintenant terminé, merci d'avoir suivi les kheys !"
        },
        idle: {
          title: "Pause !",
          message:
            "Je fais une petite pause, je reviens tout de suite les kheys !"
        }
      }
    };
  },
  mounted() {
    if (this.$route.query.start !== undefined) {
      this.title = this.screens.start.title;
      this.message = this.screens.start.message;
    } else if (this.$route.query.end !== undefined) {
      this.title = this.screens.end.title;
      this.message = this.screens.end.message;
    } else if (this.$route.query.idle !== undefined) {
      this.title = this.screens.idle.title;
      this.message = this.screens.idle.message;
    } else {
      this.title = "";
      this.message = "";
    }
  },
  methods: {
    getSocial() {
      return process.env.VUE_APP_SOCIAL_USERNAME;
    }
  }
};
</script>
