<template>
  <div>
    <div
      class="flex items-center justify-center w-full text-3xl text-binance progress-container"
    >
      <img src="../assets/img/rsa.gif" class="mr-3 stickorzent" />
      <div class="text-right text-black-shadow ">
        $<span id="start-price"></span>
      </div>
      <div class="relative flex justify-center items-center w-full mx-3">
        <div
          class="relative w-full border-2 shadow border-binance bar-box overflow-hidden"
          style="height: 40px"
        >
          <div
            class="absolute h-full bg-green-500 transition-progress progress-bg progress-radius"
            :style="{ width: percent + '%' }"
          ></div>
          <div
            class="absolute h-full transition-progress bg-money progress-bg progress-radius"
            :style="{ width: percent + '%' }"
          ></div>
        </div>
        <div class="absolute font-semibold text-white text-black-shadow">
          <div
            id="balance"
            class="inline-block animate__animated animate__slow"
          >
            $<span id="balance-amount"></span>
          </div>
        </div>
      </div>
      <div class="text-black-shadow ">$<span id="end-price"></span></div>
      <img src="../assets/img/riche.png" class="ml-3 stickorzent" />
    </div>
    <div
      class="flex items-center justify-center w-full pr-6 text-lg text-white text-black-shadow"
    >
      <span id="percent"></span>%<span class="mx-3 text-binance">|</span
      ><span>x<span id="multiplier"></span></span
      ><span class="mx-3 text-binance">|</span
      ><span
        ><span v-if="percentChange > 0">+</span
        ><span id="percent-change"></span>%</span
      >
    </div>
  </div>
</template>

<script>
import { CountUp } from "countup.js";

import { getFuturesBalance, getBinanceTime } from "@/binance";

const animationClassLose = "animate__bounceIn";
const animationClassWin = "animate__tada";

export default {
  name: "Progress",
  data() {
    return {
      startPrice: Number(process.env.VUE_APP_GOAL_START),
      endPrice: Number(process.env.VUE_APP_GOAL_END),
      balance: 0,
      percent: 0,
      percentChange: 0,

      startPriceCountUp: undefined,
      endPriceCountUp: undefined,
      balanceCountUp: undefined,
      percentCountUp: undefined,
      multiplierCountUp: undefined,
      percentChangeCountUp: undefined
    };
  },
  async mounted() {
    this.balanceCountUp = new CountUp("balance-amount", 0, {
      decimalPlaces: 2
    });

    this.percentCountUp = new CountUp("percent", 0, {
      decimalPlaces: 2
    });
    this.multiplierCountUp = new CountUp("multiplier", 0, {
      decimalPlaces: 2
    });

    this.startPriceCountUp = new CountUp("start-price", this.startPrice, {});
    this.endPriceCountUp = new CountUp("end-price", this.endPrice, {});

    this.percentChangeCountUp = new CountUp("percent-change", 0, {});

    this.balanceCountUp.start();
    this.percentCountUp.start();
    this.multiplierCountUp.start();
    this.startPriceCountUp.start();
    this.endPriceCountUp.start();
    this.percentChangeCountUp.start();

    await this.refresh();
    setInterval(async () => {
      await this.refresh();
    }, 10000);

    getBinanceTime();
  },
  methods: {
    async refresh() {
      const balances = await getFuturesBalance();
      if (balances) {
        const usdtBalance = balances.find(balance => balance.asset == "USDT");
        if (usdtBalance) this.update(Number(usdtBalance.balance) || 0);
      }
    },
    update(price) {
      const oldBalance = this.balance;
      this.balance = price;
      if (this.endPrice > 0) {
        if (this.balance >= this.startPrice) {
          this.percent =
            ((this.balance - this.startPrice) /
              (this.endPrice - this.startPrice)) *
            100;
        } else {
          this.percent = Math.max(
            0,
            (this.balance / this.startPrice - 1) * 100
          );
        }
      }
      if (this.balance !== oldBalance) {
        const animationClass =
          this.balance > oldBalance ? animationClassWin : animationClassLose;
        const el = document.getElementById("balance");
        el.classList.remove(animationClass);
        setTimeout(() => {
          el.classList.add(animationClass);
        }, 100);
        setTimeout(() => {
          el.classList.remove(animationClass);
        }, 2100);
      }

      const difference = this.balance - this.startPrice;
      this.percentChange = (difference / this.startPrice) * 100;

      this.balanceCountUp.update(this.balance);
      this.percentCountUp.update(this.percent);
      this.multiplierCountUp.update(this.balance / this.startPrice);
      this.percentChangeCountUp.update(this.percentChange);
    }
  }
};
</script>

<style scoped lang="scss">
.progress-bg {
  max-width: 100%;
  border-radius: 0 30px 30px 0;
}
.bar-box {
  border-radius: 30px;
}
.progress-radius {
  border-radius: 30px;
}
.bg-money {
  background: url("https://wallpaperaccess.com/full/333536.jpg") repeat;
  background-size: 100px;
  opacity: 0.5;
  animation: scroll 50s linear infinite;
  will-change: background-position;
}
.transition-progress {
  transition: all 2s;
}
.stickorzent {
  width: 60px;
}

@keyframes scroll {
  from {
    background-position: right 400px top -100px;
  }
  to {
    background-position: right 0px top 0px;
  }
}

@keyframes tada {
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.25, 1.25, 1.25) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.25, 1.25, 1.25) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}
</style>
