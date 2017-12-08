const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
  error: 'Page not found.',
  name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.status(200).send({
      name: 'Daniel1',
      age: 1
    }, {
      name: 'Daniel2',
      age: 2
    }, {
      name: 'Daniel3',
      age: 3
  });
});

app.listen(3000);

module.exports.app = app;
