<template>
  <PriceProgressWidget class="py-3 border-b-2 bg-binance border-binance" />
</template>

<script>
import PriceProgressWidget from "@/components/PriceProgressWidget.vue";

export default {
  name: "HeaderView",
  components: {
    PriceProgressWidget
  }
};
</script>
