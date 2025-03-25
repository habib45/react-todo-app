const User = require('../models/User');

const getUsers = (req, res) => {
  User.getAllUsers((err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json(results);
  });
};

module.exports = { getUsers };