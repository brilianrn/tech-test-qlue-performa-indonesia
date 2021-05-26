const users = require('../data/users.json');

class UserController {
  static showUsers (req, res) {
    res.status(200).json(JSON.stringify(users));
  }
}

module.exports = UserController;