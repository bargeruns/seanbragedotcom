const express = require('express');
const hbs = require('hbs');
const app = express();

hbs.registerPartials(`${__dirname}/views/partials`);
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('resume', {
    history: {
      jobs: require('./api/resume/history_work.json'),
      education: require('./api/resume/history_education.json')
    },
    skills: {
      tech: require('./api/resume/skills_tech.json'),
      soft: require('./api/resume/skills_soft.json')
    }
  });
});

app.listen(8080, () => {
  console.log('Server running on port 8080.');
});
