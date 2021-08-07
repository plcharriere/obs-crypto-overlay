<template>
  <div class="flex text-xl border-t-2 bg-binance border-binance">
    <div
      class="flex items-center justify-center font-medium border-r border-binance text-binance text-black-shadow"
      style="width: 340px"
    >
      <img src="../assets/img/twitter.webp" class="mr-2" style="height: 26px" />
      <img
        src="../assets/img/instagram.webp"
        class="mr-3"
        style="height: 26px"
      />
      <span class="text-white">@{{ getSocial() }}</span>
    </div>
    <Positions :marquee="true" class="w-1/2 border-r border-binance" />
    <Orders :marquee="true" class="w-1/2" />
  </div>
</template>

<script>
import Orders from "@/components/Orders/Orders.vue";
import Positions from "@/components/Positions/Positions.vue";

export default {
  name: "FooterView",
  components: {
    Orders,
    Positions
  },
  methods: {
    getSocial() {
      return process.env.VUE_APP_SOCIAL_USERNAME;
    }
  }
};
</script>
