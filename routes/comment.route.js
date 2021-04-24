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
    // res.status(500).json({
    //   message: 'Error while register your comment. Try again later.'
    // });
  }
});

module.exports = router;