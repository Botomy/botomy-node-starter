import fastify from "fastify";
import play from "./src/play";
import { LevelData } from "./lib/types";

const server = fastify();

let lastCall = Date.now();
server.post("/", async (request) => {
  let diff = Date.now() - lastCall;
  console.log(1000 / diff);
  lastCall = Date.now();
  return [];
  let levelData = request.body as LevelData;
  const moves = play(levelData);
  console.log(moves);
  return moves;
});

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
