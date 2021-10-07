const { Post } = require('../db/postModel');
const { WrongParametersError } = require('../helpers/errors');

const getPostsService = async () => {
  const posts = await Post.find({});
  return posts;
};

const getPostByIdService = async (id) => {
  const post = await Post.findById(id);
  if (!post) {
    throw new WrongParametersError(`have no post with id ${id}`);
  }
  return post;
};

const addPostService = async ({ topic, text }) => {
  const post = new Post({ topic, text });
  await post.save();
};

const changePostService = async (id, { topic, text }) => {
  await Post.findByIdAndUpdate(id, { $set: { topic, text } });
};

const deletePostService = async (id) => {
  await Post.findByIdAndRemove(id);
};

module.exports = {
  getPostsService,
  getPostByIdService,
  addPostService,
  changePostService,
  deletePostService
};
