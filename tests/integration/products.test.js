const request = require("supertest");
const { User } = require("../../models/user");
const { Product } = require("../../models/product");
let server;

describe("/api/products", () => {
  beforeEach(() => {
    server = require("../../index");
  });

  afterEach(async () => {
    await Product.remove({});
    await server.close();
  });

  describe("GET /", () => {
    it("should return 400 if given id is invalid", async () => {
      const token = new User().generateAuthToken();
      const productId = "a";
      const res = await request(server)
        .get(`/api/products/${productId}`)
        .set("x-auth-token", token);

      expect(res.status).toBe(404);
    });
  });

  describe("POST /", () => {
    let token;
    let name;

    const exec = () => {
      return request(server)
        .post("/api/products")
        .set("x-auth-token", token)
        .send({ name });
    };

    beforeEach(() => {
      token = new User().generateAuthToken();
      name = "product1";
    });

    it("should return 401 (unauthorized) if client is not logged in", async () => {
      token = "";
      const res = await exec();
      expect(res.status).toBe(401);
    });

    it("should return 400 if name is less than 3 characters", async () => {
      name = "";
      const res = await exec();
      expect(res.status).toBe(400);
    });

    it("should return 400 if name is more than 50 characters", async () => {
      name = new Array(257).join("a");
      const res = await exec();
      expect(res.status).toBe(400);
    });

    it("should save the product if name is valid", async () => {
      await exec();
      const product = await Product.find({ name: "product1" });
      expect(product).not.toBeNull();
    });

    it("should return the product if name is valid", async () => {
      await exec();
      const res = await exec();
      expect(res.body).toHaveProperty("_id");
      expect(res.body).toMatchObject({ name: "product1" });
    });
  });
});
