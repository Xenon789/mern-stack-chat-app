const express = require('express');
const path = require('path');
const db = require('./config/connection');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});