import fastify from "fastify";
import play from "./src/play";

const server = fastify();

server.post("/", async (request) => {
  let levelData = request.body;
  return play(levelData);
});

export default server;
