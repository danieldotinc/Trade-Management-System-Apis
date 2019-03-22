const Jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const config = require("config");
const { User } = require("../../../models/user");

describe("user.generateAuthToken", () => {
  it("Should return a valid jwt", () => {
    const payLoad = {
      _id: mongoose.Types.ObjectId().toHexString(),
      name: "Daniel",
      isAdmin: true
    };
    const user = new User(payLoad);
    const token = user.generateAuthToken();
    const decoded = Jwt.verify(token, config.get("jwtPrivateKey"));

    expect(decoded).toMatchObject(payLoad);
  });
});
