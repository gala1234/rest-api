const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const product = require('./routes/product.route'); // Imports routes for the products

// initialize our express app
const app = express(); 

// To connect with the DB
let dev_db_url = 'mongodb://gala:1playaSoleada@ds163164.mlab.com:63164/productstutorial';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
app.use('/products', product);

const port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});