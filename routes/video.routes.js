const { Router } = require("express");
const uploadCloud = require("../configs/cloudinary.config");
const router = Router();

const videoRepo = require("../repository/video.dao");

router.get("/", async (req, res) => {
  try {
    const videos = await videoRepo.getAll();
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: "Error while get  videos" });
  }
});

router.post(
  "/upload/:userId",
  uploadCloud.single("video"),
  async (req, res) => {
    try {
      const { userId } = req.params;
      const { title, description } = req.body;
      // console.log(title, description);
      // console.log(req.file)
      const videoURL = req.file.path;
      const newVideo = {
        videoURL,
        title,
        description,
        user: userId,
      };
      const video = await videoRepo.upload(newVideo);
      res.status(201).json(video);
    } catch (error) {
      res.status(500).json(error);
    }
  }
);

router.get("/view/:videoId", async (req, res) => {
  try {
    const { videoId } = req.params;
    const video = await videoRepo.findOne(videoId);
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:IdVideo", async (req, res) => {
  const { IdVideo } = req.params;
  console.log(IdVideo);
  try {
    const video = await videoRepo.deleteOne(IdVideo);
    console.log(video);

    res.status(200).json(video);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
