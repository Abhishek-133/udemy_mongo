const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

// Connect to db connection
mongoose
  .connect(process.env.MONGO_URI, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    useNewUrlParser: true,
  useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.log(err));

app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT} `));
