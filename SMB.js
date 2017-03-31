const express = require('express');
const hbs = require('hbs');
const app = express();

hbs.registerPartials(`${__dirname}/views/partials`);
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('resume');
});

app.listen(8080, () => {
  console.log('Server running on port 8080.');
});
