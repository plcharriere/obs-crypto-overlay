# OBS Crypto Overlay

This project is a dynamic web overlay I voluntarily made for a [crypto streamer](https://twitch.tv/cevapsichuan) on Twitch.

It will display your Binance Futures balance, positions and orders on screen.

## Screenshots
### Idle view
![Idle view screenshot](https://i.imgur.com/dAwdqIU.png)

### Main view
![Main view screenshot](https://i.imgur.com/JgJsr3o.png)

## Warnings

This app should __**NEVER BE EXPOSED TO THE INTERNET**__ since it contains your Binance API Key and Secret Key.

Be sure to disable any trade permission for your keys on Binance.

## Project setup

```
npm install
```
```
cp .env.example .env
```

Configure your `.env` file with your name, your Binance keys and your goal.

```
VUE_APP_SOCIAL_USERNAME=YourUsername  # Your Twitter and Instagram username

VUE_APP_BINANCE_API_KEY=              # Your Binance API Key
VUE_APP_BINANCE_SECRET_KEY=           # Your Binance Secret Key

VUE_APP_GOAL_START=500                # Starting amount of your balance
VUE_APP_GOAL_END=5000                 # Goal amount of your balance

VUE_APP_LANGUAGE=en                   # Language of the app 'en' or 'fr'
```

## How to use

Run the app in development mode with `npm run serve` or build it for production with `npm run build` and host it with a web server.

`/main`

Displays the main view.

`/idle?title=Your title&text=Your text`

Displays the idle view with desired title and text.

`/orders`

Displays only the order component.

`/positions`

Displays only the positions component.

`/header`

Displays only the header component.

`/footer`

Displays only the footer component.

`/btcprice`

Displays only the Bitcoin price component.

`/progress`

Displays only the progress bar component.