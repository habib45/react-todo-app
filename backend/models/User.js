const db = require('../db/connection');

const User = {
  getAllUsers: (callback) => {
    const query = 'SELECT * FROM users';
    db.query(query, callback);
  }
};

module.exports = User;