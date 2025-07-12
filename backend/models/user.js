// backend/models/User.js
const { ObjectId } = require('mongodb');

class User {
  constructor({ _id, username, email, password }) {
    this._id = _id ? new ObjectId(_id) : undefined;
    this.username = username;
    this.email = email;
    this.password = password;
  }
}

module.exports = User;
