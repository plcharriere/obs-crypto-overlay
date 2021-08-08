<template>
  <div class="relative border-2 border-binance w-full h-full overflow-hidden">
    <HeaderView class="w-full" />
    <FooterView class="footer absolute w-full" />
  </div>
</template>

<script>
import HeaderView from "@/views/HeaderView.vue";
import FooterView from "@/views/FooterView.vue";

export default {
  name: "MainView",
  components: {
    HeaderView,
    FooterView
  }
};
</script>

<style scoped lang="scss">
.footer {
  bottom: 0;
  left: 0;
}
</style>
