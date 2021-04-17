const Video = require("../models/video.model");

class VideoRepository {
  constructor(VideoModel) {
    this.video = VideoModel;
  }
  getAll = async () => {
    try {
      const video = await this.video
        .find()
        .populate("user")
        .populate("userImage");
      return video;
    } catch (error) {
      throw new Error();
    }
  };
  uploadVideo = async (newVideo) => {
    try {
      const videoUpload = await this.video.create(newVideo);
    } catch (error) {
      throw new Error();
    }
  };
}

modelu.exports = new ProjectRepository(Video);
