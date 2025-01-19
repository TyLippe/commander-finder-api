const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

class LoginService {
  constructor() {}

  mockUsers = [
    {
      id: 1,
      username: "admin",
      password: "$2y$10$CJhFJN5XQqXY6.K9P74Ds.cl9Rs2z/44Mt22kif/ug.CSb9LEprn6", // bcrypt hash for 'password'
    },
  ];

  findUserByUsername(username) {
    return this.mockUsers.find((user) => user.username === username);
  }

  async checkPassword(password, hash) {
    return await bcrypt.compare(password, hash);
  }

  async login(username, password) {
    const user = this.findUserByUsername(username);
    if (!user) {
      return { error: "User not found" };
    }

    const isMatch = await this.checkPassword(password, user.password);
    if (!isMatch) {
      return { error: "Invalid password" };
    }

    const token = jwt.sign({ id: user.id }, "your_jwt_secret", {
      expiresIn: "4h",
    });

    return { auth: true, token };
  }
}

module.exports = LoginService;
