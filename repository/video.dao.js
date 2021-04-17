const Video = require("../models/video.model");
const fileUploader = require("../configs/cloudinary.config");

class VideoRepository {
  constructor(VideoModel) {
    this.video = VideoModel;
  }
  getAll = async () => {
    try {
      const video = await this.video.find().populate("user");

      return video;
    } catch (error) {
      throw new Error();
    }
  };
  upload = async () => {
    try {
      
    } catch (error) {
      
    }
  };
}

module.exports = new VideoRepository(Video);
