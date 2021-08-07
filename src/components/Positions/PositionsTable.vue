<template>
  <div class="flex flex-col w-full text-lg text-white text-black-shadows">
    <div
      class="grid w-full grid-cols-5 pb-2 pl-2 mb-2 border-b border-gray-500"
    >
      <div class="font-medium">Position Side</div>
      <div class="font-medium">Size</div>
      <div class="font-medium">Entry Price</div>
      <div class="font-medium">Liq. Price</div>
      <div class="font-medium">PNL</div>
    </div>
    <div class="grid w-full grid-cols-5 pl-2">
      <template v-for="(position, i) in positions" v-bind:key="position.entry">
        <template v-if="i < 3">
          <div :class="getSideClass(position.side)">{{ position.side }}</div>
          <div>{{ position.size }}</div>
          <div>{{ position.entry }}</div>
          <div>{{ position.liq }}</div>
          <div :class="getPnlClass(position.pnl)">
            {{ getPnl(position.pnl) }}
          </div>
        </template>
      </template>
    </div>
    <div v-if="positions.length === 0" class="pl-2">
      No position for now.
    </div>
  </div>
</template>

<script>
export default {
  name: "PositionsTable",
  props: {
    positions: Array
  },
  methods: {
    getSideClass(side) {
      if (
        side.toLowerCase().includes("buy") ||
        side.toLowerCase().includes("long")
      )
        return "text-green-500";
      return "text-red-500";
    },
    getPnlClass(pnl) {
      if (Number(pnl) > 0) return "text-green-500";
      return "text-red-500";
    },
    getPnl(pnl) {
      if (Number(pnl) > 0) return "+" + pnl;
      return pnl;
    }
  }
};
</script>
