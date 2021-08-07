<template>
  <Positions :marquee="marquee" />
</template>

<script>
import Positions from "@/components/Positions/Positions.vue";

export default {
  name: "PositionsVIew",
  components: {
    Positions
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
