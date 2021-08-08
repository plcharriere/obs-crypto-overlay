<template>
  <div class="flex flex-col w-full text-lg text-white text-black-shadow">
    <div
      class="grid w-full grid-cols-5 pb-2 pl-2 mb-2 border-b border-gray-500"
    >
      <div class="font-medium">Order Type</div>
      <div class="font-medium">Side</div>
      <div class="font-medium">Price</div>
      <div class="font-medium">Amount</div>
      <div class="font-medium">Trigger</div>
    </div>
    <div class="grid w-full grid-cols-5 pl-2">
      <template v-for="(order, i) in orders" v-bind:key="order.id">
        <template v-if="i < 3">
          <div>{{ order.type }}</div>
          <div :class="getSideClass(order.side)">{{ order.side }}</div>
          <div>{{ order.price }}</div>
          <div>{{ order.amount }}</div>
          <div>{{ order.trigger }}</div>
        </template>
      </template>
    </div>
    <div v-if="orders.length === 0" class="pl-2">
      No order for now.
    </div>
  </div>
</template>

<script>
export default {
  name: "OrdersTable",
  props: {
    orders: Array
  },
  methods: {
    getSideClass(side) {
      if (side.toLowerCase().includes("buy")) return "text-green-500";
      return "text-red-500";
    }
  }
};
</script>
