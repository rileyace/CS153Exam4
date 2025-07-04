const express = require('express');
const router = express.Router();

// GET: show form
router.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>3D Distance Calculator</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          input { width: 50px; margin: 5px; }
          button { padding: 10px 20px; background-color: dodgerblue; color: white; border: none; cursor: pointer; }
        </style>
      </head>
      <body>
        <h1>Distance of (x,y,z) from (0,0,0)</h1>
        <p>Write the code for this app which calculates <br>d = Math.sqrt(x*x + y*y + z*z)</p>
        <form method="get" action="/question3/calc">
          <input name="x" type="number" placeholder="x" required />
          <input name="y" type="number" placeholder="y" required />
          <input name="z" type="number" placeholder="z" required />
          <br><br>
          <button type="submit">CALCULATE DISTANCE</button>
        </form>
      </body>
    </html>
  `);
});

// GET: calculate distance
router.get('/calc', (req, res) => {
  const x = parseFloat(req.query.x) || 0;
  const y = parseFloat(req.query.y) || 0;
  const z = parseFloat(req.query.z) || 0;
  const d = Math.sqrt(x*x + y*y + z*z);

  res.send(`
    <html>
      <head>
        <title>Distance Result</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          input { width: 50px; margin: 5px; }
          button { padding: 10px 20px; background-color: dodgerblue; color: white; border: none; cursor: pointer; }
        </style>
      </head>
      <body>
        <h1>Distance of (${x},${y},${z}) from (0,0,0)</h1>
        <p>Write the code for this app which calculates <br>d = Math.sqrt(x*x + y*y + z*z)</p>
        <form method="get" action="/question3/calc">
          <input name="x" type="number" placeholder="x" value="${x}" required />
          <input name="y" type="number" placeholder="y" value="${y}" required />
          <input name="z" type="number" placeholder="z" value="${z}" required />
          <br><br>
          <button type="submit">CALCULATE DISTANCE</button>
        </form>
        <p>distance to (${x},${y},${z}) is d = ${d}</p>
      </body>
    </html>
  `);
});

module.exports = router;