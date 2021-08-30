const express =  require('express');
const connectWithMongo = require('./config/database')
const cors = require('cors')

require('dotenv').config()
const port = process.env.PORT || 3000;

connectWithMongo()

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.status(200).send('Now connected to the Meal Plan API');
  });

  app.listen(port, () => {
    console.log(`Web server now listening on port `+port)
  })

module.exports = app;