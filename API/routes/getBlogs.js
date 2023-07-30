const express = require('express');
const router = express.Router();
const connection = require('../database/sql'); // Update the path accordingly

router.get('/', async (req, res) => {
  try {
    console.log("dfdfd");
    const [result, fields] = await connection.query('SELECT * from Blogs');
    console.log("result", result);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching data from the database' });
  }
});

module.exports = router;

