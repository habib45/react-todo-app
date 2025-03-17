var express = require('express');
var router = express.Router();
const db = require('../db/connection');

/* GET task list. */
router.get('/', function(req, res, next) {
    const query = 'SELECT * FROM users';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json(results);
  });
});

module.exports = router;
