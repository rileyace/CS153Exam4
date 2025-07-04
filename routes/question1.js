const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`
    <h1>Question 1 Screen Layout Placeholder</h1>
  `);
});

module.exports = router;