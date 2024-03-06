// controllers/userController.js

const userService = require('../services/userService');

class UserController {
  async registerUser(req, res) {
    const { username, password } = req.body;
    const result = await userService.registerUser(username, password);

    if (result.success) {
      res.status(201).json({ message: result.message });
    } else {
      res.status(500).json({ error: result.message });
    }
  }

  async loginUser(req, res) {
    const { username, password } = req.body;
    const result = await userService.loginUser(username, password);

    if (result.success) {
      res.json({ token: result.token });
    } else {
      res.status(500).json({ error: result.message });
    }
  }
}

module.exports = new UserController();
