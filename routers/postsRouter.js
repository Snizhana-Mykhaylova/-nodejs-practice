const express = require("express");
const router = express.Router();
const Joi = require("joi");

let posts = [
  {
    id: 1,
    topic: "test1",
    text: "text1",
  },
  {
    id: 2,
    topic: "test2",
    text: "text2",
  },
  {
    id: 3,
    topic: "test3",
    text: "text3",
  },
];

// GET [...posts]

router.get("/", (req, res) => {
  res.json({ posts, status: "success" });
});

// GET post by id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const [post] = posts.filter((post) => post.id === id);
  if (!post) {
    res.status(400).json({ status: `have no post with id ${id}` });
  }
  res.json({ post, status: "success" });
});

// POST new post
router.post("/", (req, res) => {
  const { topic, text } = req.body;
  const schema = Joi.object({
    topic: Joi.string().alphanum().min(3).max(30).required(),
    text: Joi.string().alphanum().min(3).max(30).required(),
  });
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    res.status(400).json({ status: validationResult.error });
  }
  posts.push({
    id: new Date().getTime().toString(),
    topic,
    text,
  });

  res.json({ status: "success" });
});

// PUT by id

router.put("/:id", (req, res) => {
  const { topic, text } = req.body;

  const schema = Joi.object({
    topic: Joi.string().alphanum().min(3).max(30).optional(),
    text: Joi.string().alphanum().min(3).max(30).optional(),
  });
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    res.status(400).json({ status: validationResult.error });
  }

  posts.forEach((post) => {
    if (post.id === req.params.id) {
      (post.topic = topic), (post.text = text);
    }
  });

  res.json({ status: "success" });
});

// DELETE by id

router.delete("/:id", (req, res) => {
  posts = posts.filter((post) => post.id !== req.params.id);
  res.json({ posts, status: "success" });
});

module.exports = { postsRouter: router };
