import axios from "axios";
const crypto = require("crypto");

const apiKey = process.env.VUE_APP_BINANCE_API_KEY;
const secretKey = process.env.VUE_APP_BINANCE_SECRET_KEY;

function getSignature(query, secretKey) {
  return crypto
    .createHmac("sha256", secretKey)
    .update(query)
    .digest("hex");
}

export async function getBinanceTime() {
  try {
    const response = await axios.get("https://fapi.binance.com/fapi/v1/time");
    if (response && response.data && response.data.serverTime) {
      const diff = new Date().getTime() - response.data.serverTime;
      if (diff > 0) {
        return response.data.serverTime - diff;
      }
      return response.data.serverTime;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
  return null;
}

export async function getTime() {
  return getBinanceTime();
}

export async function getFuturesMarkPrice(symbol) {
  try {
    const response = await axios.get(
      "https://fapi.binance.com/fapi/v1/premiumIndex?symbol=" + symbol
    );
    if (response && response.data && response.data.markPrice) {
      return response.data.markPrice;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
  return null;
}

export async function getFuturesBalance() {
  try {
    const requestTime = await getTime();
    const response = await axios.get(
      "https://fapi.binance.com/fapi/v2/balance?" +
        "timestamp=" +
        requestTime +
        "&signature=" +
        getSignature("timestamp=" + requestTime, secretKey),
      {
        headers: {
          "X-MBX-APIKEY": apiKey
        }
      }
    );
    if (response && response.data) {
      return response.data;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
  return null;
}

export async function getFuturesListenKey() {
  try {
    const response = await axios.post(
      "https://fapi.binance.com/fapi/v1/listenKey",
      {},
      {
        headers: {
          "X-MBX-APIKEY": apiKey
        }
      }
    );
    if (response && response.data && response.data.listenKey) {
      return response.data.listenKey;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
  return null;
}

export async function keepaliveListenKey() {
  await axios.put(
    "https://fapi.binance.com/fapi/v1/listenKey",
    {},
    {
      headers: {
        "X-MBX-APIKEY": apiKey
      }
    }
  );
}

export async function getFuturesOpenOrders() {
  try {
    const requestTime = await getTime();
    const response = await axios.get(
      "https://fapi.binance.com/fapi/v1/openOrders?" +
        "timestamp=" +
        requestTime +
        "&signature=" +
        getSignature("timestamp=" + requestTime, secretKey),
      {
        headers: {
          "X-MBX-APIKEY": apiKey
        }
      }
    );
    if (response && response.data) {
      return response.data;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
  return null;
}

export async function getFuturesPositions() {
  try {
    const requestTime = await getTime();
    const response = await axios.get(
      "https://fapi.binance.com/fapi/v2/positionRisk?" +
        "timestamp=" +
        requestTime +
        "&signature=" +
        getSignature("timestamp=" + requestTime, secretKey),
      {
        headers: {
          "X-MBX-APIKEY": apiKey
        }
      }
    );
    if (response && response.data) {
      return response.data;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
  return null;
}

export async function getFuturesPositionMode() {
  try {
    const requestTime = await getTime();
    const response = await axios.get(
      "https://fapi.binance.com/fapi/v1/positionSide/dual?" +
        "timestamp=" +
        requestTime +
        "&signature=" +
        getSignature("timestamp=" + requestTime, secretKey),
      {
        headers: {
          "X-MBX-APIKEY": apiKey
        }
      }
    );
    if (response && response.data && response.data.dualSidePosition) {
      return response.data.dualSidePosition;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
  return null;
}
