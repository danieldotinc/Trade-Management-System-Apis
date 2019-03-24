const request = require("supertest");
const { User } = require("../../models/user");
const { Category } = require("../../models/category");
let server;

describe("/api/categories", () => {
  beforeEach(() => {
    server = require("../../index");
  });

  afterEach(async () => {
    await Category.remove({});
    await server.close();
  });

  describe("GET /", () => {
    it("Should return all categories that stored in MongoDB", async () => {
      await Category.collection.insertMany([
        { name: "category1" },
        { name: "category2" }
      ]);

      const res = await request(server).get("/api/categories");
      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
      expect(res.body.some(c => c.name === "category1")).toBeTruthy();
      expect(res.body.some(c => c.name === "category2")).toBeTruthy();
    });

    it("Should return the category if the given id is valid", async () => {
      const category = new Category({ name: "category1" });
      await category.save();

      const res = await request(server).get(`/api/categories/${category._id}`);
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("name", category.name);
    });

    it("Should return the 404 status if the given id is not valid", async () => {
      const res = await request(server).get(`/api/categories/${123}`);
      expect(res.status).toBe(404);
    });
  });

  describe("POST /", () => {
    let token;
    let name;

    const exec = () => {
      return request(server)
        .post("/api/categories")
        .set("x-auth-token", token)
        .send({ name });
    };

    beforeEach(() => {
      token = new User().generateAuthToken();
      name = "category1";
    });

    it("should return 401 (unauthorized) if client is not logged in", async () => {
      token = "";
      const res = await exec();
      expect(res.status).toBe(401);
    });

    it("should return 400 if the category name is less than 2 characters", async () => {
      name = "a";
      const res = await exec();
      expect(res.status).toBe(400);
    });

    it("should return 400 if the category name is more than 50 characters", async () => {
      name = new Array(52).join("a");
      const res = await exec();
      expect(res.status).toBe(400);
    });

    it("should save the category if it is valid", async () => {
      await exec();

      const category = await Category.find({ name: "category1" });
      expect(category).not.toBeNull();
    });

    it("should return the category if it is valid", async () => {
      const res = await exec();

      expect(res.body).toHaveProperty("_id");
      expect(res.body).toHaveProperty("name", "category1");
    });
  });
});
