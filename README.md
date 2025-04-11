# botomy-node-starter

Starter project for running a [Botomy](http://botomy.com) node player.

This uses `fastify` as the server. It is set up to listen to `post` requests on port `3000`.

Modify the `play` function in `src/play.ts` to write your bot code.

# Setup

Use this repo as a template

```
npm install
```

# RUN

Starts a server on port 3000 and calls the `play` function in `src/play.ts`

```
npm start
```

Hot reload:

```
npm run dev
```

# Helpful Info

## Wiki and level data

https://brokkli-labs.github.io/Botomy/docs/game-play/level-data

## Example bot

A sample bot can be found in `src/example_bot.ts`

## License

This project is licensed under the MIT License.
