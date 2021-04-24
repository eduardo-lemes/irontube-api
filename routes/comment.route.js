const { Router } = require("express");
const commentDao = require("../repository/comment.dao");
const auth = require("../middlewares/auth.middleware");

const router = Router();

router.post("/saveComment", async (req, res, next) => {
  try {
    const { video, user, comment } = req.body;
    const commentSuccess = await commentDao.createComment(video, user, comment);

    res.status(201).json(commentSuccess);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get("/list/:videoId", async (req, res, next) => {
  try {
    const { videoId } = req.params;
    const showList = await commentDao.getCommentsByVideo(videoId);
    res.status(200).json(showList);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/editComment/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { video, user, comment } = req.body;

    const editCommentSuccess = await commentDao.editComment(
      id,
      video,
      user,
      comment
    );

    res.status(201).json(editCommentSuccess.data);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/removeComment/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const removeCommentSuccess = await commentDao.removeComment(id);

    res.status(201).json(removeCommentSuccess.data);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
