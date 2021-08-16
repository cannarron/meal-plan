const express =  require('express');
const connectWithMongo = require('./config/database')

require('dotenv').config();
connectWithMongo()

const app = express();

module.exports = app;