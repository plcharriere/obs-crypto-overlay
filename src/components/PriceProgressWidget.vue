<template>
  <div class="flex items-center w-full">
    <BTCPrice
      class="flex-grow"
      style="width: 460px"
      :style="{ visibility: noBTC ? 'hidden' : '' }"
    />
    <Progress
      class="flex-grow px-20 border-l border-r border-binance"
      style="width: 1000px"
    />
    <div
      class="flex flex-col items-center justify-center text-black-shadow flex-grow"
      style="width: 460px"
    >
      <div class="text-xl font-medium text-binance">
        {{ $t("your_event_widget_here") }}
      </div>
    </div>
  </div>
</template>

<script>
import BTCPrice from "@/components/BTCPrice.vue";
import Progress from "@/components/Progress.vue";

export default {
  name: "HeaderView",
  components: {
    BTCPrice,
    Progress
  },
  data() {
    return {
      noBTC: false
    };
  },
  mounted() {
    if (this.$route.query.nobtc !== undefined) this.noBTC = true;
  }
};
</script>
