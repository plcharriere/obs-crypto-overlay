# OBS Crypto Overlay

This project is a web overlay I voluntarily made for a crypto streamer on Twitch.

## Warning

This app should __**NEVER BE EXPOSED TO THE INTERNET**__ since it contains your Binance Api Key and Secret Key.

Be sure to disable any trade permission for your keys on Binance.

## Project setup

```
npm install
```
```
cp .env.example .env
```

Configure your `.env` file with your name and your Binance keys.

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```