import { app } from "./../app";
import supertest from "supertest";

describe("login", () => {
  describe("given valid userName and password", () => {
    it("should return token", async () => {
      const { body } = await supertest(app)
        .post("/api/users/login")
        .send({ userName: "richard", password: "pied-piper" });
      expect(body.token).not.toBe("");
    });
  });
});

describe("login", () => {
  describe("given invalid userName and password", () => {
    it("should return status Failed", async () => {
      const { body } = await supertest(app)
        .post("/api/users/login")
        .send({ userName: "sourav", password: "pied-piper" });

      expect(body.status).toBe("Failed");
    });
  });
});

describe("get user data", () => {
  describe("given valid token", () => {
    it("should return user object", async () => {
      const { body: tokenBody } = await supertest(app)
        .post("/api/users/login")
        .send({ userName: "richard", password: "pied-piper" });

      const { body } = await supertest(app)
        .get("/api/users/userData")
        .set("Authorization", `{Basic ${tokenBody.token}`);

      expect(body.userId).toBe(1);
    });
  });
});

describe("get user data", () => {
  describe("given invalid token", () => {
    it("should return status Failed", async () => {
      const { body } = await supertest(app)
        .get("/api/users/userData")
        .set("Authorization", "Basic this is some random token");

      expect(body.status).toBe("Failed");
    });
  });
});
