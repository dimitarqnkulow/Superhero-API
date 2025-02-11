const request = require("supertest");
const { app, server } = require("./app");

describe("POST /superhero/create", () => {
  describe("Given superhero humility score should be number", () => {
    test("Should respond with a 200 status code", async () => {
      const response = await request(app).post("/superhero/create").send({
        id: "c8kichvkm6xoyg5n",
        name: "Captain America",
        superPower: "Shield Defence",
        imageUrl: "/images/CAPTAIN-AMERICA.svg",
        humilityScore: 8,
      });
      expect(response.statusCode).toBe(200);
    });
  });
});

server.close();
