const express = require('express');
const router = express.Router();

const { addPostValidation } = require('../middlewares/validationMiddlewares');

const { asyncWrapper } = require('../helpers/apiHelpers');

const {
  getPostsController,
  getPostByIdController,
  addPostController,
  changePostController,
  deletePostController
} = require('../controllers/postsController');

router.get('/', asyncWrapper(getPostsController));
router.get('/:id', asyncWrapper(getPostByIdController));
router.post('/', addPostValidation, asyncWrapper(addPostController));
router.put('/:id', addPostValidation, asyncWrapper(changePostController));
router.delete('/:id', asyncWrapper(deletePostController));

module.exports = { postsRouter: router };
