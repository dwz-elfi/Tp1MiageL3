const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 3000;
const val = "TOTO";

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/val', (req, res) => {
  res.send(`You sent the value: ${val}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

