# OBS Crypto Overlay

This project is a dynamic web overlay I voluntarily made for a [crypto streamer](https://twitch.tv/cevapsichuan) on Twitch.

It will display your Binance Futures balance, positions and orders on screen.

## Screenshots
### Idle view
![Welcome Screen Demonstration Screenshot](https://i.imgur.com/dAwdqIU.png)

### Main stream view
![Streaming Demonstration Screenshot](https://i.imgur.com/mwc2cI3.png)

## Warnings

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