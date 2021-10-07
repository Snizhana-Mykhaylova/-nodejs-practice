const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const app = express();

const { connectMongo } = require('./db/connection');
const { postsRouter } = require('./routers/postsRouter');
const { errorHandler } = require('./helpers/apiHelpers');

const PORT = process.env.PORT || 8081;

app.use(express.json());
app.use(morgan('tiny'));

app.use('/api/posts', postsRouter);

app.use(errorHandler);

const start = async () => {
  await connectMongo();

  app.listen(PORT, (err) => {
    if (err) {
      console(err);
    }
    console.log('server is runing');
  });
};

start();
