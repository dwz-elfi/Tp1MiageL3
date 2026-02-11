const express = require('express');
const app = express();
const dotenv = require('dotenv');
const { connect } = require('mongoose');
const connectDB = require('./connectDB/connectDB');
dotenv.config();
const path = require('path');


const port = process.env.PORT || 3000;
const val = "TOTO";

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'front', 'index.html'));
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'front')));


app.use('api/auth',require('./routes/authRoutes'));

connectDB();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

