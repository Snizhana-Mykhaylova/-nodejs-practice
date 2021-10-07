const {
  getPostsService,
  getPostByIdService,
  addPostService,
  changePostService,
  deletePostService
} = require('../services/postsService');

// GET [...posts]

const getPostsController = async (req, res) => {
  const posts = await getPostsService();
  res.json({ posts });
};

// GET post by id
const getPostByIdController = async (req, res) => {
  const id = req.params.id;
  const post = await getPostByIdService(id);
  res.json({ post, status: 'success' });
};

// POST new post
const addPostController = async (req, res) => {
  const { topic, text } = req.body;

  addPostService({ topic, text });
  res.json({ status: 'success' });
};

// PUT by id

const changePostController = async (req, res) => {
  const { topic, text } = req.body;
  const id = req.params.id;
  await changePostService(id, { topic, text });
  res.json({ status: 'success' });
};

// DELETE by id

const deletePostController = async (req, res) => {
  const id = req.params.id;
  await deletePostService(id);
  res.json({ status: 'success' });
};

module.exports = {
  getPostsController,
  getPostByIdController,
  addPostController,
  changePostController,
  deletePostController
};
