const express = require('express');
const router = express.Router();

// no need to import fetch, it is built-in in Node 18+

// route to show the search form
router.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Recipe Demo</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          img { width: 100px; }
          form { margin-bottom: 20px; }
          .meal { display: flex; align-items: center; margin-bottom: 10px; }
          .meal img { margin-right: 10px; }
        </style>
      </head>
      <body>
        <h1>Recipe Finder</h1>
        <form action="/question2/search" method="get">
          <input type="text" name="ingredient" placeholder="Enter an ingredient" />
          <button type="submit">Search</button>
        </form>
      </body>
    </html>
  `);
});

// route to handle search and show results
router.get('/search', async (req, res) => {
  const ingredient = req.query.ingredient || 'chicken_breast';
  const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;

  try {
    const response = await fetch(apiUrl); // native Node fetch
    const data = await response.json();
    const meals = data.meals || [];

    const mealsHtml = meals.map(meal => `
      <div class="meal">
        <img src="${meal.strMealThumb}" />
        <span>${meal.strMeal}</span>
      </div>
    `).join('');

    res.send(`
      <html>
        <head>
          <title>Recipe Demo Results</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            img { width: 100px; }
            .meal { display: flex; align-items: center; margin-bottom: 10px; }
            .meal img { margin-right: 10px; }
          </style>
        </head>
        <body>
          <h1>Results for: ${ingredient}</h1>
          <form action="/question2/search" method="get">
            <input type="text" name="ingredient" placeholder="Enter an ingredient" value="${ingredient}" />
            <button type="submit">Search</button>
          </form>
          ${mealsHtml}
        </body>
      </html>
    `);
  } catch (error) {
    console.error(error);
    res.send('Error fetching data');
  }
});

module.exports = router;