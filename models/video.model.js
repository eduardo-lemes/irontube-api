const { Schema, model } = require("mongoose");

const videoSchema = new Schema(
  {
    videoURL: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamp: true }
);

module.exports = model("video", videoSchema);
