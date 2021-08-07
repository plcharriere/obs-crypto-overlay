<template>
  <!-- <PositionsTable v-if="!marquee" :positions="positions" /> -->
  <PositionsMarquee :positions="positions" />
</template>

<script>
const _ = require("lodash");

import PositionsMarquee from "@/components/Positions/PositionsMarquee.vue";

import { getFuturesPositions } from "@/binance";

export default {
  name: "Positions",
  components: {
    PositionsMarquee
  },
  props: {
    marquee: Boolean
  },
  data() {
    return {
      positions: []
    };
  },
  async mounted() {
    await this.refresh();
    setInterval(async () => {
      await this.refresh();
    }, 10000);
  },
  methods: {
    async refresh() {
      this.update(await getFuturesPositions());
    },
    update(positions) {
      const filteredPositions = positions.filter(position => {
        return (
          Number(position.positionAmt) > 0 || Number(position.positionAmt) < 0
        );
      });

      filteredPositions.forEach(position => {
        delete position.markPrice;
        delete position.maxNotionalValue;
        delete position.isolatedMargin;
        delete position.notional;
        delete position.isolatedWallet;
      });

      if (!_.isEqual(filteredPositions, this.positions)) {
        this.positions = filteredPositions;
      }
    }
  }
};
</script>
