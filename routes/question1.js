const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Question 1 Screen</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #eee;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .button-row {
            display: flex;
            justify-content: center;
            width: 100%;
            margin-top: 10px;
          }
          .button-row button {
            flex: 1;
            color: white;
            font-size: 16px;
            padding: 10px;
            border: none;
            cursor: pointer;
          }
          .blue { background-color: blue; }
          .red { background-color: red; }
          .green { background-color: green; }

          h1 {
            text-align: center;
            margin: 40px 0;
          }

          .button-column {
            display: flex;
            flex-direction: column;
            width: 90%;
            margin-bottom: 0px;
          }
          .button-column button {
            margin: 0px 0;
            width: 100%;
            color: white;
            font-size: 16px;
            padding: 10px;
            border: none;
          }
        </style>
      </head>
      <body>
        <div class="button-row">
          <button class="blue">BLUE BUTTON</button>
          <button class="red">RED BUTTON</button>
          <button class="green">GREEN BUTTON</button>
        </div>
        <h1>Write the code for this screen</h1>
        <div class="button-column">
          <button class="blue">BLUE BUTTON</button>
          <button class="red">RED BUTTON</button>
          <button class="green">GREEN BUTTON</button>
        </div>
      </body>
    </html>
  `);
});

module.exports = router;