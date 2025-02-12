const request = require("supertest");
const { app, server } = require("./app");

describe("POST /superhero/create", () => {
  describe("Given superhero humility score should be number", () => {
    test("Should respond with a 200 status code when superhero data is valid and have numeric humilityScore", async () => {
      const response = await request(app).post("/superhero/create").send({
        id: "c8kichvkm6xoyg5n",
        name: "Captain America",
        superPower: "Shield Defence",
        imageUrl: "/images/CAPTAIN-AMERICA.svg",
        humilityScore: 8,
      });
      //Because i redirect i need to use status 302
      expect(response.statusCode).toBe(302);
    });
    test("Should respond with a 400 status code when humilityScore is not numeric", async () => {
      const respons = await request(app).post("/superhero/create").send({
        id: "c8kichvkm6xoyg5n",
        name: "Captain America",
        superPower: "Shield Defence",
        imageUrl: "/images/CAPTAIN-AMERICA.svg",
        humilityScore: "afsfas",
      });
      expect(respons.statusCode).toBe(400);
    });
    test("Should respond with a 400 status code when humilityScore is not between 1 and 10", async () => {
      const respons = await request(app).post("/superhero/create").send({
        id: "c8kichvkm6xoyg5n",
        name: "Captain America",
        superPower: "Shield Defence",
        imageUrl: "/images/CAPTAIN-AMERICA.svg",
        humilityScore: 12,
      });
      expect(respons.statusCode).toBe(400);
    });
  });
});

server.close();
