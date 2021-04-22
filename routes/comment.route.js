const { Router } = require('express');
const Comment  = require('../models/comment.model');
const Auth  = require('../middlewares/auth.middleware');

const router = Router();

router.post("/saveComment", async (req, res, next) => {
  try {
    const comment = new Comment(req.body);
    comment.save();
    res.status(200).json(comment);
  } catch (error) {
    restart.status(500).json({message: 'Error while register your comment. Try again later.'});
  }
});