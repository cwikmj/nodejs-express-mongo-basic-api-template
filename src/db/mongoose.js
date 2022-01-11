const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_ADDR, { useNewUrlParser: true }).then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  })