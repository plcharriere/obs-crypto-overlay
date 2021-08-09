import numeral from "numeral";

export function isSymbolDollar(symbol) {
  if (symbol.slice(-4) === "USDT") {
    return true;
  }
  return false;
}

export function formatNumber(n) {
  if (Number(n) < 1000) return numeral(n).format("0,0.00");
  return numeral(n).format("0,0");
}

export function formatEnum(str, capitalize = true) {
  while (str.includes("_")) str = str.replace("_", " ");
  while (str.includes("market")) str = str.replace("market", " ");
  if (capitalize) {
    let cleanStr = str.toLowerCase();
    const splitStr = cleanStr.split(" ");
    for (let i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(" ");
  }
  return str;
}

export function formatPairBySymbol(symbol, symbolFormat) {
  if (symbol.slice(-symbolFormat.length) === symbolFormat)
    return (
      symbol.slice(0, symbol.length - symbolFormat.length) + "/" + symbolFormat
    );
  return false;
}

export function formatSymbolPair(symbol) {
  const formatSymbols = ["BTC", "USDT", "ETH"];
  for (let i = 0; i < formatSymbols.length; i++) {
    const pair = formatPairBySymbol(symbol, formatSymbols[i]);
    if (pair !== false) return pair;
  }
  return symbol;
}
