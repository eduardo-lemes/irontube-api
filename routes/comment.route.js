const { Router } = require('express');
const commentDao  = require('../repository/comment.dao');
const auth  = require('../middlewares/auth.middleware');


const router = Router();

router.post("/saveComment", async (req, res, next) => {
  try {
    const {video, user, comment } = req.body;
    const commentSuccess = await commentDao.createComment(video, user, comment);

    res.status(201).json(commentSuccess);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.put("/editComment/:id", async (req, res, next) => {
  try {
    const { video, user, comment } = req.body;
    const editCommentSuccess = await commentDao.editComment(video, user, comment);

    res.status(201).json(editCommentSuccess);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/removeComment/:id", async (req, res, next) => {
  try {
    const { video, user, comment } = req.body;
    const removeCommentSuccess = await commentDao.removeComment(video, user, comment);

    res.status(201).json(removeCommentSuccess);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;