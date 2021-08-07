<template>
  <!--<OrdersTable v-if="!marquee" :orders="orders" />-->
  <OrdersMarquee :orders="orders" :dualSidePosition="dualSidePosition" />
</template>

<script>
const _ = require("lodash");

import OrdersMarquee from "@/components/Orders/OrdersMarquee.vue";

import { getFuturesOpenOrders, getFuturesPositionMode } from "@/binance";

export default {
  name: "Orders",
  components: {
    OrdersMarquee
  },
  props: {
    marquee: Boolean
  },
  data() {
    return {
      orders: [],
      dualSidePosition: false
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
      this.update(await getFuturesOpenOrders());
      this.dualSidePosition = await getFuturesPositionMode();
    },
    update(orders) {
      orders.forEach(order => {
        delete order.updateTime;
      });

      if (!_.isEqual(orders, this.orders)) {
        this.orders = orders;
      }
    }
  }
};
</script>
