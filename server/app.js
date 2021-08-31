const express = require('express');
const cors = require('cors');
const connectWithMongo = require('./config/database');

require('dotenv').config();

const port = process.env.PORT || 3000;

connectWithMongo();

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(200).send('Now connected to the Meal Plan API');
});
app.post('/api/v1/info', validateInput, meal.generatePlan);


app.listen(port, () => {
  console.log(`Web server now listening on port ${port}`);
});

module.exports = app;
