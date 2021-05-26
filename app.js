const express = require('express');
const router = require('./routes');
const app = express();
const port = 4000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log('Listing on port :', port);
});