const { Router } = require("express");
const uploadCloud = require("../configs/cloudinary.config");
const router = Router();

const videoRepo = require("../repository/video.dao");

router.get("/", async (req, res) => {
  try {
    const videos = await videoRepo.getAll();
    res.status(200).json(videos);
  } catch (Error) {
    res.status(500).json({ message: "Error while get  videos" });
  }
});

router.post(
  "/upload/:userID",
  uploadCloud.single("video"),
  async (req, res) => {
    const { userID } = req.params;
    const { title, description } = req.body;
    //   console.log(title, description);
    //   console.log(req.file)
    const videoURL = req.file.path;
  }
);
// router.post("/upload",upload.single("file"),(req, res) => {
//   res.send("Video uploaded!");
// });

module.exports = router;
