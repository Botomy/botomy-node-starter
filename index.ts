import fastify from "fastify";
import play from "./src/play";
import { LevelData } from "./lib/types";

const server = fastify();

server.post("/", async (request) => {
  let levelData = request.body as LevelData;
  const moves = play(levelData);
  return moves;
});

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
