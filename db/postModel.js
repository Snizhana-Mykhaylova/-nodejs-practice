const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
  topic: { type: String, required: true, unique: true },
  text: { type: String, required: true },
  createdat: { type: Date, default: Date.now() }
});

const Post = mongoose.model('posts', postSchema);

module.exports = { Post };
