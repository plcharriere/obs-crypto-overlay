<template>
  <HeaderView class="header" />
  <FooterView class="footer" />
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

<style scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
