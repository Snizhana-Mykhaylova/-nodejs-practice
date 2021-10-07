const mongoose = require('mongoose');

require('dotenv').config();

const connectMongo = async () => {
  const url = process.env.MONGO_URL;
  mongoose.connect(url);
};
module.exports = { connectMongo };
