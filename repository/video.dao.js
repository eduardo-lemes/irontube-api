const { router } = require("express");

//Middleware Multer
const multer = require("multer");

const videoRepo = require("../repository/videos.dao");

const upload = multer({dest: "uploads/"})

const router = videoRouter();
router.get("/", async (req, res) => {
  try {
    const videos = await videoRepo.getAll();
    res.status(200).json(videos);
  } catch (Error) {
    res.status(500).json({ message: "Error while get  videos" });
  }
});

router.post("/upload",upload.single("file"),(req, res) => {
  res.send("Video uploaded!");
});
