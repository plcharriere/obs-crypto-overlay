<template>
  <Orders :marquee="marquee" />
</template>

<script>
import Orders from "@/components/Orders/Orders.vue";

export default {
  name: "OrdersView",
  components: {
    Orders
  },
  data() {
    return {
      marquee: false
    };
  },
  mounted() {
    if (this.$route.query.marquee !== undefined) {
      this.marquee = true;
    }
  }
};
</script>
