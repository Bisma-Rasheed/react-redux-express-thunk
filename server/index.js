var cors = require('cors')
const express = require('express');
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(express.text());

app.use('/', require('./routes.js'));

app.listen(3000);