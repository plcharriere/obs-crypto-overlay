<template>
  <div class="tradingview-widget-container">
    <div id="tradingview_83aa4"></div>
  </div>
</template>
<script>
export default {
  name: "TradingView",
  components: {},
  mounted() {
    /*eslint no-undef: 0*/
    new TradingView.widget({
      width: "100%",
      height: "100%",
      symbol: "BYBIT:BTCUSDT",
      interval: "5",
      timezone: "Europe/Berlin",
      theme: "dark",
      style: "1",
      locale: "fr",
      toolbar_bg: "#f1f3f6",
      enable_publishing: false,
      hide_top_toolbar: true,
      hide_legend: true,
      save_image: false,
      container_id: "tradingview_83aa4",
      disabled_features: ["use_localstorage_for_settings"]
    });
  }
};
</script>
