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
  upload = async (newVideo) => {
    try {
      const createdVideo = await this.video.create(newVideo);
      return createdVideo;
    } catch (error) {
      throw new Error("Error uploading video");
    }
  };
  findOne = async (videoId) => {
    try {
      const video = await this.video.findById(videoId);
      return video;
    } catch (error) {
      throw new Error("Error find video");
    }
  };
}

module.exports = new VideoRepository(Video);
