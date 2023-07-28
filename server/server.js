const express = require('express');
const app = express();
const connectDb = require("../db/database");
connectDb()
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('../routes/routes')


const port = 8000

app.use(bodyParser.json())
app.use(cors());

app.use("/", routes)

app.get('/', (req,res) => {
  res.json({
    message: "Working API WeLearnWeb! 🚀"
  })
})

app.listen(port, () => {
  console.log('✅ API working on port ' + port)
})