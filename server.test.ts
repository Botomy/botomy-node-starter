import supertest from "supertest";
import server from "./server";
import * as play from "./src/play";

describe("GET /", () => {
  beforeAll(async () => {
    await server.listen();
    // await server.ready;
  });

  beforeEach(async () => {});
  afterAll(async () => {
    await server.close();
  });

  it("should return 200 and a list of moves", async () => {
    let playSpy = jest.spyOn(play, "default");
    const response = await supertest(server.server)
      .post("/")
      .send({ test: "" });

    expect(playSpy).toHaveBeenCalledWith({ test: "" });
  });
});
